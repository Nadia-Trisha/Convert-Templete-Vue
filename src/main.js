// import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue';
import Fact from './components/Fact.vue';
import Product from './components/Product.vue';
import Team from './components/Team.vue';
import Offer from './components/Offer.vue';
import Testimonial from './components/Testimonial.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/service', component: Service },
        { path: '/fact', component: Fact },
        { path: '/product', component: Product},
        { path: '/team', component: Team},
        { path: '/offer', component: Offer},
        { path: '/testmonial', component: Testimonial},
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')