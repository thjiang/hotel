import index from './views/index.vue';
import test from './views/mytest.vue';

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
    // }, {
    //     path: '/async',
    //     component: () =>
    //         import ( /* webpackChunkName: "async" */ './views/async.vue')
    }]
};
