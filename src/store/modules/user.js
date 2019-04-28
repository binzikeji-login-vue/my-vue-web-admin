const user = {
  state: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {
    user: {
      username: ''
    }
  },
  getters: {
    getUser(){
      return user.state.user;
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    asyncUpdateUser(context, user) {
      context.commit("updateUser", user);
    }
  }
};

export default user;
