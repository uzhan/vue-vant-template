// import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

const MemberRoute: RouteRecordRaw = {
  path: '/wap',
  name: 'wap',
  meta: { title: 'demo-module-page' },
  component: () => import('@/views/home/index.vue'),
}

export default MemberRoute;