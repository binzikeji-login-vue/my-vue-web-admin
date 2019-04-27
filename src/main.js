import Vue from 'vue'

import Router from  'vue-router'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

import Vuex from 'vuex'
import store from './store'

import App from './App'

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Vuex);

router.beforeEach((to, from, next) =>{
  console.log(store.getters.getToken);
  let token = store.getters.getToken;
  if (to.meta.requireAuth) {
    if (token){
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
});
