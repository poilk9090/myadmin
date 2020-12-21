import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard')
  }
]

const router = new VueRouter({  
  routes
})

export default router
