const state = {
  email: '',
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
  loginUser({commit}, payload) {
    //see implementation next
    if (payload.email === 'mail@mail.com' && payload.password === '1234') {
      //simulating getting back a valid userId
      payload.userId = '5c9283394bd63c23e83a96b8'
      commit(loginUser, payload)
    } else {
      commit(loginError)
    }
  }
}

const mutations = {

  logInUser(state, payload){
    state.email = payload.email
    state.userId = payload.userId
    state.isLoggedIn = true
  },

  loginError(state) {
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
