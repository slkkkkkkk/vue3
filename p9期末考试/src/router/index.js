import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",redirect:"/login"
  },
  {
    path: '/login', 
    component: Login
  },
  {
    path: '/layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: 'qianduan',
        component: () => import('../views/QianDuan.vue')
      },
      {
        path: 'rengong',
        component: () => import('../views/RenGong.vue')
      },
      {
        path: 'shijue',
        component: () => import('../views/ShiJue.vue')
      },
      {
        path: 'quanzhan',
        component: () => import('../views/QuanZhan.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
