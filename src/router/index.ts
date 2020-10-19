import Vue from 'vue'
import store from '../store' 
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/lead',
    name: 'leads',
    component: () => import('../pages/Leads.vue')
  },
  {
    path: '/lead/:id',
    name: 'lead',
    component: () => import('../pages/Lead.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['login']
  const authRequired = !publicPages.includes(to.name || '')
  const isAuth = store.state.auth?.isAuthStatus || false

  if (authRequired && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router