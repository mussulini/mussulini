import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'

import './registerServiceWorker'
import "./assets/scss/app.scss";

Vue.config.productionTip = false

Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
