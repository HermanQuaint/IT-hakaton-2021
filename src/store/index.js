 import Vue from 'vue'
 import Vuex from 'vuex'

 Vue.use(Vuex)

 import poster from "./poster"

 const store = new Vuex.Store({
   modules: {poster}
 })

 export const {dispatch, commit, getters} = store
 export default store