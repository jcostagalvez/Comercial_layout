<template>
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
</template>

<script>
  import cartPage from '../components/cart/CartDisplay.vue'
  import checkoutButton from '../components/cart/cartButton.vue'
  import {products} from '../fake-data.js'
  export default {
    name: 'CartPage',
    data() {
      return {
        products: products
      }
    },
    components: {
      cartPage,
      checkoutButton
    },
    methods: {
      deleteProduct(id) {
        const index = products.findIndex(product => product.id === id);
        products.splice(index,1)
      }
    },
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
