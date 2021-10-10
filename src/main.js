import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import router from '@/router';
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
