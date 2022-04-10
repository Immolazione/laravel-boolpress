import Vue from 'vue';
import VueRouter from 'vue-router';

// Diciamo a Vue di usare Vuerouter
Vue.use(VueRouter)


// Importo i miei componential
import App from './components/App.vue';
import Post from './components/Post.vue';


// Inizializziamo una nuovo VueRouter
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: App},
        {path: '/post/:id', component: Post},
    ],
});

export default router;