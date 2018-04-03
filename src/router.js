import Vue from "vue"
import Router from "vue-router"

// Views
import Main from "@/views/main"
import Add from "@/views/add"
import Realtime from "@/views/realtime"

// Init router
Vue.use(Router)

export default new Router({
  mode: "history",
  // base: "/",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/add",
      name: "Add",
      component: Add,
    },
    {
      path: "/realtime",
      name: "Realtime",
      component: Realtime,
    }
  ]
})
