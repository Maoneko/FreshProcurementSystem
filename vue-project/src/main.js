import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'normalize.css'
import './assets/css/base.css'

import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
