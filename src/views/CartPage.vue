<template>
  <div class="productCart">
    <div class="cart-container">
      <cartPage @delete-id="deleteProduct" :products="products"/>
    </div>
  </div>
</template>

<script>
  import cartPage from '../components/cart/CartDisplay.vue'
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
  justify-content: center;
}
.cart-container{
  padding-top: 10%;
  width: 80%;
  height: 50%;
}
</style>
