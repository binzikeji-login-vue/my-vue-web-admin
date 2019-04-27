import Vue from 'vue'

import Router from  'vue-router'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

import App from './App'

Vue.use(Router);
Vue.use(ElementUI);

router.beforeEach((to, from, next) =>{
  next();
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
