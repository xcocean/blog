import axios from 'axios'

/**
 * 访问页面次数计数
 */
const seePage = function (pageName) {
  axios.get('/api/common/seePage/' + pageName)
}

export default {
  seePage
}
