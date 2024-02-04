<template>
  <div class="container" >
    <div class ="imagen-container">
    <img :src="imageSource">
    </div>
    <div class="utility-container">
      <div class ="detail-container">
        <detailProduct class="detail-component" :name="product.name" :price="product.price"/>
      </div>
    </div>
    <div class="cart-container">
      <addCart class="cart-component"  :sizes="product.sizes"/>
    </div>
  </div>
</template>

<script>
import addCart from '../producto/ProductCardHoover.vue';
import detailProduct from '../producto/DetailProduct.vue'
export default {
  name: 'ProductDisplay',

  components: {
    addCart,
    detailProduct,
    },
  props: {
    product: {
      type: Object,
    },
  },
  computed: {
    imageSource() {
      // Crear una URL de datos (data URL) a partir de la cadena base64
      if(this.product.img.startsWith("data:image/png;base64")){
        return this.product.img
      }else{
        return `data:image/png;base64,${this.product.img}`
      }
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-column-gap: 10%;
  justify-items: stretch;
}
.imagen-container{
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
}
.imagen-container img{
  width: 100%;
}
.utility-container{
  padding-top: 5%;
  grid-column: 2/4;
  grid-row: 1/2;
  align-self: start;
}
.detail-container{
  width: 100%;
}
.detail-component{
  display: flow;
}
.cart-container{
  grid-column: 2/4;
  grid-row: 2/4;
  align-self: end;
}
.cart-component{
  display: flow;
}
</style>
