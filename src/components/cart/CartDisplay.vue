<template>
  <div class="container" >
    <div>
      <div class="cartLine-container" v-for="product in products" :key="product.cartId">
        <CartLine class="cartLine" @delete-id="deleteProduct" :size="product.sizeSelected" :cart-id="product.cartId" :product="product.producto"/>
      </div>
      <div class="totalPrices">
        <Prices :products="products" />
      </div>
    </div>
  </div>
</template>

<script>
import CartLine from './CartLine.vue'
import Prices from '../cart/TotalPrice.vue'
export default {
  name: 'CartDisplay',
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    CartLine,
    Prices
  },
  methods: {
    deleteProduct(id) {
      this.$emit('delete-id', id)
    }
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
.cartLine{
  border-top: 1px solid #D4AF37;
  border-bottom: 1px solid #D4AF37;
  padding-bottom: 2%;
  padding-top: 3%;
}
.totalPrices{
  width: 100%;
}
</style>
