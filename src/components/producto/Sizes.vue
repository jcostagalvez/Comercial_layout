<template>
  <div  class="container">
    <div class="size-container">
      <ul class="sizes">
        <li v-for="size in sizes" :key="size">
          <sizeCard :size="size" class="product" :id="size"/>      
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sizeCard from './SizesCard.vue'
export default {
  name: 'SizesCards',
  props: {
    sizes: {
      type: Array,
    },
    components: {
      sizeCard,
    },
  },
}
</script>

<style scoped>
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
</style>
