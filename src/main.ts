import { createApp } from 'vue'
import router from './routers/index'
import store from './store/index'
import App from './App.vue'
import './styles/base.less'
import 'amfe-flexible'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
