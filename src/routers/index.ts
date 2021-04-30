import { createRouter, createWebHashHistory } from 'vue-router'
// import routerConfig from './config'
import Layout from '../layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    menuTop: true,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 's-marketing' },
        index: 1
      },
      {
        path: '/my',
        component: () => import('@/views/my/index.vue'),
        name: 'My',
        hidden: true,
        meta: { title: '测试' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: { title: '404' },
    hidden: true
  }
]

// export const asyncRoutes = [
//   ...List,
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
