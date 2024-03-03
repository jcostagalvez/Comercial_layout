<template>
  <div>
    <navStore class="nav"></navStore>
    <div class="productCart">
      <div class="cart-container">
        <cartPage @delete-id="deleteProduct" :products="products"/>
      </div>
      <div class="button-container">
        <checkoutButton> 
          CHECKOUT
        </checkoutButton>
      </div>
    </div>
  </div>
</template>

<script>
  import cartPage from '../components/cart/CartDisplay.vue'
  import checkoutButton from '../components/cart/cartButton.vue'
  import navStore from './navBar.vue';
  export default {
    name: 'CartPage',
    data() {
      return {
        products:[]
      }
    },
    components: {
      cartPage,
      navStore,
      checkoutButton
    },
    beforeCreate(){
      if(this.$store.state.products.length > 0) {
        this.$store.dispatch('getUserCart')
        .then(() => {
          this.products = this.$store.getters.getProductsIncart;
        })
        .catch(error => console.log('error: ' + error))
      }else {
        this.$store.dispatch('getProducts')
        .then(() => {
          this.$store.dispatch('getUserCart')
          .then(() => { 
            this.products = this.$store.getters.getProductsIncart;
          })
          .catch(error => console.log('error: ' + error))
        })
        .catch(error => console.log('error: ' + error))
      }

    },
    methods: {
      deleteProduct(id) {
        this.$store.dispatch('deleteCartProduct', id);
        this.products = this.products.filter(producto => producto._id != id);
      }
    }
  };
</script>

<style scoped>
.productCart{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-container{
  padding-top: 5%;
  padding-bottom: 2%;
  width: 80%;
}
.button-container{
  display: flow;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 40%;
  height: 5%;
}
</style>
