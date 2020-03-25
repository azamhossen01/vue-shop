import Vue from 'vue';
import VueRouter from 'vue-router';
import {fb} from './firebase';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Admin from './components/Admin.vue';
import Overview from './components/Overview.vue';
import Products from './components/Products.vue';
import Orders from './components/Orders.vue';

Vue.use(VueRouter);

const router =  new VueRouter({
    mode : 'history',
     routes : [
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
            name : 'Admin',
            meta: { requiresAuth: true },
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
    ]
});

router.beforeEach((to,from,next)=>{
    const currentUser = fb.auth().currentUser;
    const requireAuth = to.matched.some(record => record.meta.requireAuth);
    if(requireAuth && !currentUser) next('/');
    else if(!requireAuth && currentUser) next();
    else next();
});

export default router;
// export default new VueRouter({routes,mode:'history'});