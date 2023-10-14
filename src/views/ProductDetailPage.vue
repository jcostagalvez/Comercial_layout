<template>
  <div class="content">
    <productDetailPage :product="product"/>
  </div>
</template>

<script>
  import productDetailPage from '../components/productoDetail/ProductDisplay.vue'
  import {products} from '../fake-data.js'
  export default {
    name: 'ProductsDetailPage',
    components:{
    productDetailPage
    },
    data() {
      return {
        product: products.find((p) => p.id === this.$route.params.id)
      }
    },
  };
</script>

<Style>

</Style>
