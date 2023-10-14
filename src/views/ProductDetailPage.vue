<template>
  <div class="container">
    <div class="detailPage-container">
      <productDetailPage   class="detailPage-component" :product="product"/>
    </div>
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

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.detailPage-container{
  width: 100%;
  height: 80%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.detailPage-component {
  width: 60%;
  height: fit-content;
}
</style>
