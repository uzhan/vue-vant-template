import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
