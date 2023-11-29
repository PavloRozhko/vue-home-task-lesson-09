import { createStore } from 'vuex'

import products from '@/data/products.json'

export default createStore({
  state: {
    productsList: [],
  },
  getters: {
    categoriesList(state) {
      const categoriesList = state.productsList.map((product) => {
        return {
          title: product.categoryTitle,
          id: product.categoryId,
        }
      })
      return categoriesList
    },
    getProductsById: (state) => {
      return (categoryId) => {
        return state.productsList.find((item) => item.categoryId == categoryId)
      }
    },
  },
  mutations: {
    setProductsList(state, products) {
      state.productsList = products
    },
  },
  actions: {
    loadData({ commit }) {
      commit('setProductsList', products)
    },
  },
})
