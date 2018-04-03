import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Testing vuex store and commit lifecycles",
    organizations: [],
    messages: []
  },

  getters : {
    getOrganization(state) {
      return state.organizations
    }
  },

  mutations: {
    addOrganization(state, org) {
      // Add timestamp
      org.created = Date.now()

      // Push to list
      state.organizations.push(org)
    }
  }
})
