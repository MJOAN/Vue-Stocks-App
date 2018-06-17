const state = {
	funds: 50775, 
	stocks: []
}

const mutations = {
	'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
		const record = state.stocks.find(element => element.id === stockId)
		if(record) {
			record.quantity += quantity;
		} else {
			state.stocks.push({ 
				id: stockId, 
				quantity: quantity
			})
		}
		state.funds -= stockPrice * quantity;
	}, 
	'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
		const record = state.stocks.find(element => element.id == stockId)
		if(record.quantity > quantity) {
			record.quantity -= quantity
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1)
		}
		state.funds += stockPrice * quantity
	}, 
	'SET_PORTFOLIO' (state, portfolio) {
		state.funds = portfolio.funds;
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
	}
}

const actions = {
	sellStock({ commit}, order) { //gets commit method, + order
		commit('SELL_STOCK', order)
	}
}

// line 44 explained: getters refers to store getters
// then stocks refers to stocks from /modules/stocks/ file 
// el is looping through all stocks not just in portfolio
// matching against portfolio stock id

const getters = { // getting our data- get current portfolio of stocks
	stockPortfolio(state, getters) {
		return state.stocks.map(stock => {
			const record = getters.stocks.find(el => el.id == stock.id)
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			}
		})
	}, 
	funds (state) {
		return state.funds; // refers to funds in line 2 above
	}
}

export default {
	state, 
	mutations, 
	actions,
	getters
}