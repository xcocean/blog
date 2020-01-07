import request from '../../commons/utils/request'
import cookieUtil from '../../commons/utils/cookieUtil'

const state = {
  isLogin: false,
  token: '',
  name: '',
  image: '',
}

const mutations = {
  setIsLogin: (state, isLogin) => {
    state.isLogin = isLogin
  },
  setToken: (state, token) => {
    state.token = token
  },
  setName: (state, name) => {
    state.name = name
  },
  setImage: (state, image) => {
    state.image = image
  },
  logout: (state) => {
    cookieUtil.remove('token')
    state.isLogin = false
    request({url: '/api/logout', params: {'access_token': state.token}}).then(res => {
      window.setTimeout('window.location.reload()', 2000)
    })
  },
}

const actions = {
  setIsLogin ({commit}, isLogin) {
    commit('setIsLogin', isLogin)
  },
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setName ({commit}, name) {
    commit('setName', name)
  },
  setImage ({commit}, image) {
    commit('setImage', image)
  },
  //注销
  logout ({commit}) {
    commit('logout')
  },
}
const getters = {
  isLogin: state => {
    return state.isLogin
  },
  token: state => {
    return state.token
  },
  name: state => {
    return state.name
  },
  image: state => {
    return state.image
  },

}

export default {
  state,
  mutations,
  actions,
  getters
}
