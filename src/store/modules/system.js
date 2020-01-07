const state = {
  ssoLoginURL: 'http://127.0.0.1:8080/sso/login',
  serverIp: 'http://localhost:8080',
}

const getters = {
  ssoLoginURL: state => {
    return state.ssoLoginURL
  },
  serverIp: state => {
    return state.serverIp
  }
}

export default {
  state,
  getters
}
