import axios from 'axios';
import qs from 'qs';
import { api, nwCode } from './json';


let service = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 5000,
    headers: {
        // 'content-type': 'application/json;charset=utf-8',
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
})
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;

//http-请求拦截
service.interceptors.request.use(
    config => {
        if (promiseArr[config.url]) { //发起请求时，取消掉当前正在进行的相同请求
            promiseArr[config.url]('操作取消')
            promiseArr[config.url] = cancel
        } else {
            promiseArr[config.url] = cancel
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

//http-响应拦截
// service.interceptors.response.use(
//     response => {
//         if (response.data.code == 5000) { //返回code码为5000的时候,代表登录失效
//             return
//         }
//         return response;
//     },
//     error => {
//         // return Promise.reject(error)
//     }
// )

export default (name, param = {}) => {
    return new Promise((resolve, reject) => {
        function request(name, param) {
            if (!name) throw new Error('未传入请求名称');

            this.reqParam = param.data || {};
            this.data = {};
            this.params = {};
            this.type = param.type || 'post';
            this.isHint = param.isHint || 1;
            this.isLoading = param.isLoading || true;
            this.isConId = api[name] && api[name].isConId || true;
            this.url = api[name] && api[name].url;
            this.errCode = api[name] && api[name].errCode;

            this.handle()
        }
        let req = request.prototype;
        req.handle = function() {
            if (!this.url) throw new Error('未找到url');
            // this.isLoading && Indicator.open({
            //     text: 'Loading...',
            //     spinnerType: 'fading-circle'
            // });
            this.type === 'get' ? this.params = this.reqParam : this.data = qs.stringify(this.reqParam);

            this.send()
        }

        req.send = function() {
            service({
                method: this.type,
                url: this.url,
                params: this.params,
                data: this.data,
                cancelToken: new CancelToken(c => { cancel = c })
            }).then(res => {
                res && res.data && res.data.code === 200 ? this.success(res.data) : this.error(res.data.code)
                    // Indicator.close();
            }).catch(err => {
                this.network(err && err.response && err.response.status);
                // Indicator.close();
            })
        }
        req.success = function(res) {
            resolve(res)
        }
        req.error = function(code) {
            resolve(code)

            this.errHint(parseInt(code))
        }
        req.errHint = function(code) {
            if (this.isHint === 0) return;

            if (this.isHint !== 1 && Array.isArray(this.isHint)) {
                for (let i of this.isHint) {
                    if (this.isHint[i] === code) return
                }
            }
            // Toast(this.errCode[code] && '意料之外的错误');
        }
        req.network = function(status) {
            reject(status)

            // Toast(nwCode[status] && '网络错误');
        }
        return new request(name, param)
    })
}