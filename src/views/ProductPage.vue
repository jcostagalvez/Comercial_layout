<template>
  <div class="page-container">
    <h2>ABRIGOS</h2>
    <ul class="product-container">
      <li v-for="index in 4" :key="index">
        <ProductImagen class="product" :id="idex"/>      
      </li>
    </ul>
  </div>
</template>

<script>
  import ProductImagen from '../components/ProductImagen.vue';
  export default {
    name: 'ProductsPage',
    components: {
      ProductImagen,
    }
  };
</script>

<style scoped>
.page-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.product-container{
  padding-inline-end: 1%;
  padding-inline-start: 1%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
}
.product-container li{
  list-style-type: none;
}
.product{
}
</style>