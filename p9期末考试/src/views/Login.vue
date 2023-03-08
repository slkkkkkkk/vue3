<template>
  <div>
    <div class="home">
      <div class="con">
        <h3>电商后台管理系统</h3>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
             <i class="el-icon-user"></i><el-input v-model="ruleForm.username"></el-input>
           
          </el-form-item>
          <el-form-item prop="password">
            <i class="el-icon-key"></i><el-input v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/http";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');

          login(this.ruleForm).then((result) => {
            console.log(result);
            if (result.status == 200) {
              this.$message({
                message: "登录成功",
                type: "success",
              });

              sessionStorage.setItem("token", result.data.token);
              this.$router.push({ path: "/layout/qianduan" });
            } else {
              this.$message({
                message: result.msg,
                type: "error",
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script >

<style  scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-input {
  width: 400px;
  margin-bottom: 20px;
}

.con {
  // padding: 20px;
//   margin: auto;
//   margin-left: 15vw;
  width: 600px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid;
  background-color: aliceblue;
}
</style>