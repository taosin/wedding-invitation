import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import index from './views/index.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});

window.router = router;
window.routers = ['page1'];
router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/index': {
        component: index,
        subRoutes:{
        }
    }
});

router.redirect({
    '*': '/index'
});
router.start(App, '#app');
