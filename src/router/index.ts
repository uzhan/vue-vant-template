import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


// 为了首屏加载快，所以首页不使用懒加载
import Home from '@/views/home/index.vue'

// 自动扫描 modules 里面的路由模块，路由模块请根据业务自行拆分
const files = import.meta.glob('./modules/**/*.ts', { eager: true, import: 'default' })

const routes: RouteRecordRaw[] = []

// 获取所有的路由内容
Object.keys(files).forEach((key: string) => {
  const file = files[key] as RouteRecordRaw
  // 根据导出的内容判断是否数组，如果数组需使用扩展运算符
  if (Array.isArray(file)) {
    routes.push(...file)
  } else {
    routes.push(file)
  }
})

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  // 无权限页面
  {
    path: '/no-permission',
    name: 'NoPermission',
    component: () => import('@/views/error-page/no-permission/index.vue'),
    meta: {
      title: '访问无权限'
    }
  },
  // 404 页面路由
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error-page/404/index.vue'),
    meta: {
      title: '页面走丢了'
    }
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [...constantRoutes, ...routes]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title as string
  next()
})

export default router
