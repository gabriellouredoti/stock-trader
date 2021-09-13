import stocks from '../../data/stocks'
export default{
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
        },
        randomizeStocks(state){
            state.stocks.forEach(stk => {
                stk.price = Math.round(stk.price * (1 + Math.random() - 0.45))
            })
        }
    },
    actions: {
        buyStock({commit}, order){
            //Essa mutation stock está no módulo de portfolio
            commit('buyStock', order)
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}){
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}