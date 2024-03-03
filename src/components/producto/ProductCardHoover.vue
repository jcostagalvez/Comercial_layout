<template>
  <div  class="container">
    <div class="size-container">
      <ul class="sizes">
        <li v-for="size in sizes" :key="size">
          <sizecard :sizeSelected="choicedSize" @sizePreference="sizeSelected" :size="size" class="product" :id="size"/>      
        </li>
      </ul>
    </div>
      <button @click="isClicked" class="button-container"> Agregar a la bolsa </button>
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
      choicedSize: ''
    }
  },
  methods: {
    isClicked() {
      this.$emit('isAdded', true);
    },
    sizeSelected(event){
      this.choicedSize = event;
      console.log(' this.choicedSize : ' +  this.choicedSize);
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
.button-container{
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
  padding: 8px;
  background-color: rgb(212, 183, 18);
  border-style: none;
  opacity: 0.7;
  color: white;
}
.button-container:hover{
  transform: scale(1.2);
}
.button-container:active  {
  background-color: rgb(119, 103, 10);
  transform: scale(1.1);
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