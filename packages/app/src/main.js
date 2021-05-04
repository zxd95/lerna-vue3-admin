import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import { useElementPlus } from "../src/plugins/element-plus"
// 导入公共样式
import "./assets/style/index.scss"

createApp(App)
  .use(router)
  .use(store)
  .use(useElementPlus)
  .mount("#app")
