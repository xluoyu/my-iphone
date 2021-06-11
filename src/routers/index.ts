/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createRouter, createWebHistory } from 'vue-router'
import Empty from '@/layout/EmptyRouter.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Empty,
    name: 'home'
  },
  {
    path: '/alipay',
    component: Empty,
    name: 'alipay',
    meta: {
      type: 'app',
      style: 'black'
    }
  },
  {
    path: '/music',
    component: () => import('@/views/music/index.vue'),
    name: 'music',
    meta: {
      type: 'iframe',
      style: 'white'
    }
  },
  {
    path: '/settings',
    component: () => import('@/views/settings/layout.vue'),
    name: 'settings',
    children: [
      {
        path: '',
        component: () => import('@/views/settings/children/home.vue'),
        name: 'settings',
        meta: {
          title: '设置',
          back: false
        }
      },
      {
        path: '/settings/pwd',
        component: () => import('@/views/settings/children/pwd.vue'),
        name: 'pwd',
        meta: {
          title: '安全设置',
          back: true
        }
      },
      {
        path: '/settings/setPwd',
        component: () => import('@/views/settings/children/setPwd.vue'),
        name: 'setPwd',
        meta: {
          title: '',
          back: true,
          style: 'black'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
