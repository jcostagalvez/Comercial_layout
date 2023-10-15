<template>
  <div class="container" >
    <div>
      <div class="cartLine-container" v-for="product in products" :key="product.id">
        <CartLine :product="product"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import CartLine from './CartLine.vue'
export default {
  name: 'CartDisplay',
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    CartLine,
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.cartLine-container{

}
</style>
