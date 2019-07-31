import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        webImage: 'https://webimages.pzlive.vip/' // 七牛云图片域名
    },
    mutations: {

    }
})

export default store