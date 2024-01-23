<template>
  <div  class="container">
    <div class="size-container">
      <ul class="sizes">
        <li v-for="size in sizes" :key="size">
          <sizecard :size="size" class="product" :id="size"/>      
        </li>
      </ul>
    </div>
    <div class="cart-container"> 
      <span> Agregar a la bolsa </span>
      <!-- <font-awesome-icon icon="fa-solid fa-truck" style="color: #ffffff;" /> -->
    </div>
  </div>
</template>

<script>
import sizecard from './SizesCard.vue'
export default {
  name: 'cardHoover',
  components:{
    sizecard
  },
  props: {
    sizes: {
      type: Array
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.container{
  width: 20%;
  height: 100%;
}
.size-card{
  height: 100%;
  width: 100%;
}
.cart-container{
  border-radius: 20px;
  padding: 8px;
  background-color: rgb(212, 183, 18);
  opacity: 0.7;
  color: white;
}
.sizes{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: -1;
  grid-gap: 4%;
  padding: 2%;
}
.sizes li{
  list-style-type: none;
}
.product{
  width: 100%;
  height: 100%;
}
.size-container{
  padding-bottom: 4%;
}
</style>