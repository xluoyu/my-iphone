import router from './index'
import { baseRoute } from '../utils'

router.beforeEach((to, form, next) => {
  // qiankun的坑
  // 由于主应用与子应用的router版本不同，history的state格式也不同，当从子应用路由替换到主应用时会报异常
  // 统一state格式
  if (to.name == 'home' && form.name) {
    history.pushState(
      {
        back: form.path,
        current: baseRoute,
        forward: null,
        position: null,
        replaced: false,
        scroll: null
      },
      '',
      baseRoute
    )
  }

  next()
})
