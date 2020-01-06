import axios from 'axios'
import ipConfig from '../js/ipConfig'

let getInfo = axios.create({
  timeout: 10000, // 请求超时时间
  baseURL: ipConfig.serverIp + '/api/user/info ',
  method: 'get',
  success (data) {
    console.log(data)
    return data.data
  }
})

export default {
  getInfo
}
