/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createRouter, createWebHistory } from 'vue-router'
import Empty from '@/layout/EmptyRouter.vue'
import EmptyPage from '@/layout/EmptyPage.vue'

export const constantRoutes = [
  {
    path: '',
    component: EmptyPage,
    name: 'home'
  },
  {
    path: 'alipay/*',
    component: EmptyPage,
    name: 'alipay',
    meta: {
      type: 'app',
      style: 'black'
    }
  },
  {
    path: 'music/:child*',
    component: Empty,
    name: 'music',
    meta: {
      type: 'app',
      style: 'white'
    }
  },
  {
    path: 'calculator/:child*',
    component: EmptyPage,
    name: 'calculator',
    meta: {
      type: 'app',
      style: 'white'
    }
  },
  {
    path: 'settings',
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
  routes:
  [
    {
      path: '/my-iphone',
      component: Empty,
      children: constantRoutes
    }
  ]
})

export default router
