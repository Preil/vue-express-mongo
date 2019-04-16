import Vue from 'vue'

const state = {
  email: 'usertest',
  userId: null,
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

const actions = {
  async logInUser ({commit}, payload) {
    await Vue.axios.get('/user/email/' + payload.email)
      .then((resp) => {
        let data = resp.data
        if (data && data.length > 0) {
          if (data[0].password === payload.password) {
            payload.userId = data[0]._id
            commit('logInUser', payload)
          } else {
            commit('loginError')
          }
        }
      })
      .catch(() => {
        commit('loginError')
      })
  }
}

const mutations = {

  logInUser (state, payload) {
    state.email = payload.email
    state.userId = payload.userId
    state.isLoggedIn = true
  },

  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email or password is invalid'
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
