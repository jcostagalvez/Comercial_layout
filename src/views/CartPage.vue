<template>
  <div class="productCart">
    <div>
      <cartPage :products="products"/>
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
  };
</script>

<Style>

</Style>
