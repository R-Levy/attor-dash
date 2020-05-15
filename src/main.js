import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { store } from './store.js';
import router from './router.js'
import Axios from 'axios'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
