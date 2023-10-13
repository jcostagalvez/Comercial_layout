<template>
  <div class="page-container">
    <h2>ABRIGOS</h2>
    <ul class="product-container">
      <li v-for="product in products" :key="product.id">
        <ProductDisplay :product="product" class="product" :id="product.id"/>      
      </li>
    </ul>
  </div>
</template>

<script>
  import ProductDisplay from '../components/ProductDisplay.vue';
  import{products} from '../fake-data.js'
  export default {
    name: 'ProductsPage',
    data() {
      return {
        products,
      }
    },
    components: {
      ProductDisplay,
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
  grid-template-columns: repeat(3, 1fr);
  grid-column: -1;
  grid-gap: 4%;
}
.product-container li{
  list-style-type: none;
}
.product{
}
</style>