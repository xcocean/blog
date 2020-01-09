<template>
  <div>

    <el-row style="width: 60%;margin: 20px auto;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <el-input v-model="ruleForm.content" type="textarea" placeholder="请输入留言内容"></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  import home from '../../commons/views/home'
  import axios from 'axios'

  export default {
    name: 'board',
    data () {
      return {
        ruleForm: {
          email: '',
          content: '',
          title: '',
        },
        rules: {
          content: [
            {required: true, message: '请输入内容', trigger: 'blur'},
            {min: 2, max: 200, message: '长度在 2 到 200 个字符', trigger: 'blur'}
          ],
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        axios.post('/api/common/board', {
          'email': this.ruleForm.email,
          'title': this.ruleForm.title,
          'content': this.ruleForm.content
        })
          .then(res => {
            if (res.data.code == 2000) {
              this.$alert('提交留言成功！', '提示', {
                confirmButtonText: '确定'
              })
              this.$refs[formName].resetFields()
            } else {
              this.$message.error('提交留言失败！' + res.data)
            }
          })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    },
    created () {
      home.seePage('board')
    }
  }
</script>

<style scoped>

</style>
