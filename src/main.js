import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

import "./assets/scss/app.scss";
import './registerServiceWorker'

Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
