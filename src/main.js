import Vue from 'vue'
import App from './App.vue'
import router from './router'
window.$ = window.jQuery = require('jquery');
// window.$ = window.jQuery = jQuery
import 'bootstrap'
import 'popper.js'

import './assets/app.scss';
Vue.config.productionTip = false

Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('Login',require('./components/Login.vue').default);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
