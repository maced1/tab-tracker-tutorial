// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from "vuex-router-sync"
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store' //we made ourselves

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

const vuetify = new Vuetify()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})
