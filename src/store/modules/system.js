const state = {
  ssoLoginURL: 'http://sso.qbccn.com/sso/login',
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
