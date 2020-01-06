import axios from 'axios'
import globalValues from '../commons/js/globalValues'

// 添加一个请求拦截器
const request = axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // return config
  //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
  config.headers['Authorization'] = globalValues.access_token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
const response = axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default {
  request,
  response
}
