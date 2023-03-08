<template>
  <el-container>
    <el-header
      ><h1>公司log</h1>
      <p>电商后台管理系统</p>
      <button @click="tui">退出</button></el-header
    >
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="/layout/qianduan">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="1">
                  <span slot="title">用户列表</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item index="/layout/shijue">
                <i class="el-icon-menu"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>
              <el-menu-item index="/layout/quanzhan">
                <i class="el-icon-document"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
              <el-menu-item index="/layout/rengong">
                <i class="el-icon-setting"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
            </el-menu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tui(){
      this.$router.push('/login')
    }
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>