import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from './components/Home.vue'
import About from './components/About.vue';
import Admin from './components/Admin.vue'
import Overview from './components/Overview.vue'
import Products from './components/Products.vue'
import Orders from './components/Orders.vue'
const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/about',
        component : About,
       
    },
    {
        path : '/admin',
        component : Admin,
        children : [
            {
                path : 'overview',
                component : Overview,
                name : 'Overview'
            },
            {
                path : 'products',
                component : Products,
                name : 'Products'
            },
            {
                path : 'orders',
                component : Orders,
                name : 'Orders'
            },

        ]
    },
];

export default new VueRouter({routes,mode:'history'});