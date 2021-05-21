import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/alipay',
    component: ():Promise<typeof import('*.vue')> => import('@/layout/EmptyRouter.vue'),
    name: 'alipay',
    meta: {
      type: 'app'
    }
  },
  {
    path: '/settings',
    component: ():Promise<typeof import('*.vue')> => import('@/views/settings/layout.vue'),
    name: 'settings',
    children: [
      {
        path: '',
        component: ():Promise<typeof import('*.vue')> => import('@/views/settings/children/home.vue'),
        name: 'settings',
        meta: {
          title: '设置'
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
