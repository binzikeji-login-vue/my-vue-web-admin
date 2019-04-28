const token = {
  state: sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : {
    token: false
  },
  getters: {
    getToken(){
      return token.state.token;
    }
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    asyncUpdateToken(context, token) {
      context.commit("updateToken", token);
    }
  }
};

export default token;
