import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from "axios"
axios.defaults.baseURL = "http://www.ysqorz.top:8888/api/private/v1"
axios.interceptors.request.use(res=>{
  // 
   res.headers.Authorization = localStorage.getItem("token");
  return res
})
axios.interceptors.response.use(res=>{
   
  return res
})

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
