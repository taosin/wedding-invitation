import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import index from './views/index.vue';
import page1 from './views/page-1.vue';
import page2 from './views/page-2.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
    hashbang: false,
    history: false,
    saveScrollPosition: true
});

window.router = router;
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
        }
    }
});

router.start(App, '#app');

