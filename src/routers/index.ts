import { createRouter, createWebHashHistory } from 'vue-router'
// import routerConfig from './config'
// import Layout from '../layout/index.vue'

export const constantRoutes = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: 'home',
  //       component: ():Promise<typeof import('*.vue')> => import('@/views/home/index.vue'),
  //       name: 'Home',
  //       meta: { title: '首页', icon: 's-marketing' },
  //       index: 1
  //     },
  //     {
  //       path: '/my',
  //       component: ():Promise<typeof import('*.vue')> => import('@/views/my/index.vue'),
  //       name: 'My',
  //       hidden: true,
  //       meta: { title: '测试' }
  //     }
  //   ]
  // },
  {
    path: '/alipay',
    component: ():Promise<typeof import('*.vue')> => import('@/views/alipay/layout.vue'),
    redirect: '/alipay/index',
    name: 'alipay',
    children: [
      {
        path: 'index',
        component: ():Promise<typeof import('*.vue')> => import('@/views/alipay/children/home.vue')
      }
    ]
  },
  {
    path: '/settings',
    component: ():Promise<typeof import('*.vue')> => import('@/views/settings/layout.vue'),
    redirect: '/settings/index',
    name: 'settings',
    children: [
      {
        path: 'index',
        component: ():Promise<typeof import('*.vue')> => import('@/views/settings/children/home.vue'),
        name: 'settings-Home'
      }
    ]
  },
  {
    path: '/:w+',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
