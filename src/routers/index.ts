/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createRouter, createWebHistory } from 'vue-router'
import Empty from '@/layout/EmptyRouter.vue'
import { baseRoute } from '../utils'

export const constantRoutes = [
  {
    path: '',
    component: Empty,
    name: 'home'
  },
  {
    path: '/alipay/:child*',
    component: Empty,
    name: 'alipay',
    meta: {
      type: 'app',
      style: 'black'
    }
  },
  {
    path: '/music/:child*',
    component: Empty,
    name: 'music',
    meta: {
      type: 'app',
      style: 'white'
    }
  },
  {
    path: '/calculator/:child*',
    component: Empty,
    name: 'calculator',
    meta: {
      type: 'app',
      style: 'white'
    }
  },
  {
    path: '/settings',
    component: () => import('@/views/settings/layout.vue'),
    name: 'settings',
    redirect: '/settings/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/settings/children/home.vue'),
        meta: {
          title: '设置',
          back: false
        }
      },
      {
        path: 'pwd',
        component: () => import('@/views/settings/children/pwd.vue'),
        name: 'pwd',
        meta: {
          title: '安全设置',
          back: true
        }
      },
      {
        path: 'setPwd',
        component: () => import('@/views/settings/children/setPwd.vue'),
        name: 'setPwd',
        meta: {
          back: true,
          style: 'black'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(baseRoute),
  routes: constantRoutes
})

export default router
