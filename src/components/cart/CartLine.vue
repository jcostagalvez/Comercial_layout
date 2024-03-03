<template>
  <div class="container" >
    <div class="container-img">
      <img :src="imageSource" :alt="product.name">
    </div>
    <div class="container-details">
      <ProductDetail class="ProductDetail" :name="product.name" :price="product.price"/>
      <span class="ProductDetail"> Cantidad : 1</span>
      <span class="ProductDetail"> Talla: L</span>
    </div>
    <div class="container-button" @click="deleteObject">
      <CartButton class="delete-button" > 
        Eliminar del carro
      </CartButton>
    </div>
  </div>
</template>

<script>
import CartButton from './cartButton.vue'
import ProductDetail from '../producto/DetailProduct.vue'
export default {
  name: 'CartLine',
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    CartButton,
    ProductDetail
  },
  methods: {
    deleteObject() {
      this.$emit('delete-id', this.product._id);
    }
  },
  computed: {
    imageSource() {
      if(this.product.img.startsWith("data:image/png;base64")){
        return this.product.img
      }else{
        return `data:image/png;base64,${this.product.img}`
      }
    },
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 60% 30%;
  grid-gap: 5%;
}
span[class$="ProductDetail"]{
  padding: 2%;
}
.container-img img{
  width:100%
}
.container-details{
  align-self: center;
}
.container-button{
  align-self: center;
}
.ProductDetail{
  display: flow;
}
.delete-button{
  display: flow;
  width: 50%;
  height: 30%;
}
</style>
