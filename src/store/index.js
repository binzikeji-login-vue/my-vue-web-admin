import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  token: '',
};
const mutations = {
  updateToken(state, data) {
    state.token = data;
  }
};
const actions = {
  asyncUpdateToken(context, data) {
    context.commit("updateToken", data);
  }
};
const getters = {
  getToken() {
    return state.token;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
