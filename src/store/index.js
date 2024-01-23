import Vue from 'vue'
import Vuex from 'vuex'
import apiProducts from '../services/products'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products : [],
    cartList : [],
    fireList : []
  },
  getters: {
    getProductById : (state) => (id) => {
      return state.products.find(producto => producto.id === id);
    }
  },
  mutations: {
    set_product(state, products){
      state.products = products;
    }
  },
  actions: {
    async getProducts({commit}){
      return apiProducts.get_allProducts()
      .then(response => response.json()
      .then( data => {
        console.log(data);
        commit('set_product', data.data);
      }))
      .catch(err => {
        console.log(err);
      }); 
    }
  },
  modules: {
  
  }
})
