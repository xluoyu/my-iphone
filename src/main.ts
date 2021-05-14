import { createApp } from 'vue'
import router from './routers/index'
import store from './store/index'
import App from './App.vue'
import './styles/base.less'
import 'amfe-flexible'
import initVant from './plugins/vant'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'alipay',
    entry: 'http://192.168.0.170:3001',
    container: '#routerView',
    activeRule: '/alipay'
  }
])

start()

const app = createApp(App)
app.use(router)
app.use(store)
initVant(app)

app.mount('#app')
