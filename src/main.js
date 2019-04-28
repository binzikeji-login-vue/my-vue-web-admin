import Vue from 'vue'

import Router from 'vue-router'
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

// 钩子函数 Vue 加载前执行
router.beforeEach((to, from, next) => {
  let token = store.getters.getToken;
  console.log("main.js 页钩子函数 beforeEach 请求 url : " + to.path + "登录状态: " + token);
  if (to.meta.requireAuth) {
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else if (to.path == '/login') {
    if (token) {
      next("/main");
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  // vuex
  store,
  // 路由
  router,
  // ElementUI
  render: h => h(App)
});
