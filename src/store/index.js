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
    getProducts : (state) => {
      return state.products;
    },
    getProductById : (state) => (id) => {
      return state.products.find(producto => producto.id === id);
    },
    getProductsIncart : (state) => {
      const cartProducts = [];
      state.cartList.forEach( productCart => {
       let producto = state.products.find(producto => producto._id == productCart.productId);
       if (producto != undefined ) cartProducts.push(producto);
      })
      return cartProducts

    }
  },
  mutations: {
    set_product(state, products){
      state.products = products;
    },
    set_cart(state, cart){
      state.cartList = cart;
    },
    delete_cartProduct (state, productId){
      const listNewCart = state.cartList.filter(producto => producto.productId != productId);
      state.cartList = listNewCart;
    },
    set_cart_product(state, productId){
      state.cartList.push(productId);
    }
  },
  actions: {
    async getProducts({commit}){
      return apiProducts.get_allProducts()
      .then(response => response.json()
      .then( data => {
        console.log('getProducts')
        console.log(data.data)
        commit('set_product', data.data);
      }))
      .catch(err => {
        console.log(err);
      }); 
    },
    async getUserCart({commit}){
      return apiProducts.get_userCart(1)
      .then(response => response.json()
      .then( data => {
        console.log('getUserCart')
        console.log(data.data)
        commit('set_cart', data.data)
      }))
    },
    async deleteCartProduct({commit}, productId){
      return apiProducts.delete_productCart(1, productId)
      .then(response => response.json()
      .then( data => {
        console.log('deleteCartProduct')
        console.log(data.data)
        commit('delete_cartProduct', productId)
      }))
      .catch(err => {
        console.log(err);
      }); 
    },
    async addCartProduct({commit}, productId){
      return apiProducts.add_cartProduct(1, productId)
      .then(response => response.json()
      .then(data => {
        console.log('Product Id ---> ' + productId);
        console.log('addCartProduct');
        console.log(data.data);
        commit('set_cart_product', productId)
      }))
      .catch(err => console.log(err))
    }
  },
  modules: {
  
  }
})
