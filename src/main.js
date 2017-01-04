import Vue from 'vue';
import Router from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
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

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
	'/': {
        name: 'index',
        component: index
    },
    '/index': {
        name: 'index',
        component: index,
        subRoutes:{
            '/page1': {
                name: 'page1',
                component: page1
            },
            '/page2': {
                name: 'page2',
                component: page2
            }
        }
    }
});

// sync(router);
router.start(App, '#app');

