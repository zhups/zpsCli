import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('./pages/home/home.vue')), 'Home')
const index = r => require.ensure([], () => r(require('./pages/home/index.vue')), 'index')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            component: index
        }, {
            path: '/index',
            component: index
        }]
    }]
})