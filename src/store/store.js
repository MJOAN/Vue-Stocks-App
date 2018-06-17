import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules: { // adding in the modules/stocks.js to get started
		stocks, 
		portfolio
	}
})