import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

import uView from "uview-ui";
Vue.use(uView);

// 注册全局组件
import MescrollBody from "./uni_modules/mescroll-uni/components/mescroll-body/mescroll-body.vue"
import MescrollUni from "./uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif