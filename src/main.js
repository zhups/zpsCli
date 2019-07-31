import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './assets/js/axios.js'
import { Scroll, Loading } from 'cube-ui' // 
import { Tabbar, TabbarItem } from 'vant';
import store from './vuex/stores'
console.log(Tabbar)
Vue.config.productionTip = false

// Vue.use(Cube)

Vue.use(Tabbar).use(TabbarItem).use(Scroll).use(Loading);
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')