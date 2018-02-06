import index from './components/index.vue';
import test from './components/mytest.vue';

export default {
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/index',
        component: index
    }, {
        path: '/test',
        component: test
    }, {
        path: '/async',
        component: () =>
            import ( /* webpackChunkName: "async" */ './components/async.vue')
    }]
}
