const api = {
    getuser: {
        name: 'getuser',
        url: 'user/getuser',
        errCode: {
            3000: '用户未注册',
        }
    },
    getsearchgoodsbylabel: {
        name: 'getsearchgoodsbylabel',
        url: 'goods/getsearchgoodsbylabel',
        errCode: {}
    }
}

const nwCode = {
    400: '服务器：错误请求400',
    401: '未授权：请求失败402',
    403: '服务器禁止访问403',
    404: '未找到页面404',
    405: 'HTTP 错误 405',
    406: 'HTTP 错误 406',
    407: 'HTTP 错误 407',
    408: '请求超时408',
    409: 'HTTP 错误 409',
    411: 'HTTP 错误 411',
    412: 'HTTP 错误 412',
    413: 'HTTP 错误 413',
    414: 'HTTP 错误 414',
    415: 'HTTP 错误 415',
    416: 'HTTP 错误 416',
    417: 'HTTP 错误 417',
    423: 'HTTP 错误 423',
    500: '服务器错误500',
    501: '服务器错误501',
    502: '服务器错误502',
    503: '服务器错误503',
    504: '服务器错误504',
    505: '服务器错误505',
}

export {
    api,
    nwCode
}