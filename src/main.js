import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'
import './assets/scss/app.scss';

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import { TooltipPlugin, LinkPlugin } from 'bootstrap-vue'
Vue.use(TooltipPlugin)
Vue.use(LinkPlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
