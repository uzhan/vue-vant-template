import Vue from 'vue'
import VueRouter from 'vue-router'

// 为了首屏加载快，所以首页不使用懒加载
import Home from '@/views/home'

const originalPush = VueRouter.prototype.push

// 处理路由跳转会报错的问题
VueRouter.prototype.push = function push(...rest) {
  return originalPush.apply(this, rest).catch((err) => err)
}

Vue.use(VueRouter)
// 自动扫描 modules 里面的路由模块，路由模块请根据业务自行拆分
const files = require.context('./modules', false, /\.js$/)

const routes = []
// 获取所有的路由内容
files.keys().forEach((key) => {
  const file = files(key).default
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
    component: () => import('@/views/error-page/no-permission'),
    meta: {
      title: '访问无权限'
    }
  },
  // 404 页面路由
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '页面走丢了'
    }
  }
]

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
