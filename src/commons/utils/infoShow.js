import Vue from 'vue'
//2.新创建一个vue实例
const v = new Vue()

// 警告
const warn = function (c) {
  v.$message({
    message: c,
    type: 'warning'
  })
}

const info = function (c) {
  v.$message(c)
}

export default {
  warn,
  info
}
