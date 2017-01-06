import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import index from './views/index.vue';
import page1 from './views/page-1.vue';
import page2 from './views/page-2.vue';
import page3 from './views/page-3.vue';
import page4 from './views/page-4.vue';
import page5 from './views/page-5.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});

window.router = router;
window.routers = ['page1', 'page2', 'page3', 'page4', 'page5'];
router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/index': {
        component: index,
        subRoutes:{
            '/page1': {
                name: 'page1',
                component: page1
            },
            '/page2': {
                name: 'page2',
                component: page2
            },
            '/page3': {
                name: 'page3',
                component: page3
            },
            '/page4': {
                name: 'page4',
                component: page4
            },
            '/page5': {
                name: 'page1',
                component: page5
            },
        }
    }
});

router.redirect({
    '*': '/index'
});
router.start(App, '#app');
