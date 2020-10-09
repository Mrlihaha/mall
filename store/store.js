 import Vue from "vue"
 import Vuex from "vuex"
 import appData from "../indexData.js"
 
 Vue.use(Vuex)
 const store = new Vuex.Store({
 	state:{
		appData
	},
	mutations:{
	}
 })
 export default store