<template>
  <div >
    <navStore class="nav"></navStore>
    <div class="page-container">
      <h2>{{$store.state.frase}}</h2>
      <ul class="product-container">
        <li v-for="product in $store.state.products" :key="product.id">
          <ProductDisplay :product="product" class="product"/>      
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import navStore from './navBar.vue';
  import ProductDisplay from '../components/producto/ProductDisplay.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'ProductsPage',
    beforeCreate(){
      this.$store.dispatch('getProducts')
      .then(() => {
        console.log(this.products)
      }).catch(e => console.log(e))
    },
    computed:{
      ...mapState({
        products : state => state.index.products
      })
    },
    components: {
      ProductDisplay,
      navStore
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
.nav{
  height: 25%;
  width: 100%;
}
.product-container{
  height: 75%;
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
</style>