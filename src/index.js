import Vue from "vue"
import router from "@/router"
import store from "@/store"

import app from "@/views/app"

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(app)
})
