import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './plugins/i18n'
import vuetify from './plugins/vuetify'
import './plugins/base'

Vue.config.productionTip = false
Vue.prototype.$log = console.log.bind(console);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");




