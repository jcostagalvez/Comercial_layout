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
      state.cartList.forEach(productCart => {
        let cartProduct = {};
        const producto = state.products.find(producto => producto._id == productCart.productId);
       if (producto != undefined ){
        cartProduct.producto = producto;
        cartProduct.cartId = productCart._id;
        cartProduct.sizeSelected = productCart.size;
        cartProducts.push(cartProduct);      
      } 
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
    delete_cartProduct (state, id){
      console.log(`state.cartList ${state.cartList}`);
      const listNewCart = state.cartList.filter(producto => producto._id != id);
      console.log(`listNewCart ${listNewCart}`);
      state.cartList = listNewCart;
    },
    set_cart_product(state, productId){
      state.cartList.push(productId);
    },
    delete_Cart(state){
      state.cartList.pop();
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
    async deleteCartProduct({commit}, id){
      return apiProducts.delete_productCart(1, id)
      .then(response => response.json()
      .then( data => {
        console.log('_id to delete: ' + id);
        console.log('deleteCartProduct')
        console.log(data.data)
        commit('delete_cartProduct', id)
      }))
      .catch(err => {
        console.log(err);
      }); 
    },
    async addCartProduct({commit}, cartProductInfo){
      return apiProducts.add_cartProduct(1, cartProductInfo)
      .then(response => response.json()
      .then(data => {
        console.log(data.data);
        commit('set_cart_product', cartProductInfo.productId)
      }))
      .catch(err => console.log(err))
    },

    async emptyCart({commit}){
      return apiProducts.delete_cart()
      .then(response => response.json()
      .then(data => {
        console.log(data.data);
        commit('delete_Cart');
      }))
    }
  },
  modules: {
  
  }
})
