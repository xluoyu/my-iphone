import { createApp } from 'vue'
import router from './routers/index'
import './routers/config'
import store from './store/index'
import App from './App.vue'
import './styles/base.less'
// import 'amfe-flexible'
import initVant from './plugins/vant'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'alipay',
    entry: 'http://192.168.0.184:1688',
    container: '#routerView',
    activeRule: '/alipay',
    props: {
      slogan: 'Hello Qiankun',
      store
    }
  },
  {
    name: 'music',
    entry: 'http://192.168.0.184:1921',
    container: '#routerView',
    activeRule: '/my-iphone/music',
    props: {
      slogan: 'Hello Qiankun',
      store
    }
  },
  {
    name: 'calculator',
    entry: 'http://192.168.0.184:8080',
    container: '#routerView',
    activeRule: '/calculator',
    props: {
      slogan: 'Hello Qiankun',
      store
    }
  }
])

start()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(initVant)

app.mount('#app')
