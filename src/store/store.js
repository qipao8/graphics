import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"

const modules = (() => {
  const path = require("path")
  const _modules = require.context("./modules", true, /\.js$/)
  return _modules.keys()?.reduce((obj, cur) => {
    const curModule = _modules(cur).default || _modules(cur)
    const name = curModule.name || path.basename(curModule, ".js")
    obj[name] = curModule
    return obj
  })
})()

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  getters,
  modules,
})
