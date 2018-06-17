import stocks from '../../data/stocks'

const state = {
	stocks: [] 
}

const mutations = { // two mutations needed methods 
	'INIT_STOCKS'(state, stocks) { // first get state then pass stocks as payload to mutation		
		state.stocks = stocks; // new stocks passed in as arg, override as new 
	}, 
	'RANDOM_STOCKS' (state) { // existing state no payload
		state.stocks.forEach(stock => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
		})
	}
}

const actions = {
	buyStock: ({ commit }, order) => {
		commit('BUY_STOCK', order) // commit mutation! 
	}, 
	initStocks: ({ commit }) => {
		commit('INIT_STOCKS', stocks) // these are stocks we want to initialize with in app!
	}, 
	randomizeStocks: ({ commit }) => {
		commit('RANDOM_STOCKS') // no data needed
	}
}

const getters = {
	stocks: state => {
		return state.stocks;
	}
}

export default { 
	state, 
	mutations, 
	actions, 
	getters
}
