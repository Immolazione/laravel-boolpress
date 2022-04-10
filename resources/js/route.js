import Vue from 'vue';
import VueRouter from 'vue-router';

// Diciamo a Vue di usare Vuerouter
Vue.use(VueRouter)


// Importo i miei componential
import App from './components/App.vue';
import Post from './components/Post.vue';


// Inizializziamo una nuovo VueRouter
const router = new VueRouter({
    mode: 'history', // Serve a simulare la pagina web e mi permette di navigare come in un browsers

    // Qui elenco tutte le mie rotte, il path è l'url e il component: punta al mio componente
    // occhio all'ordine in cui le metti
    routes: [
        {path: '/', component: App},
        {path: '/post/:id', component: Post},
    ],
});


// Esporto l'oggetto 'router' per usarlo dentro il file di configurazione di vue (front.js)
export default router;