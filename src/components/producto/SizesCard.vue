<template>
  <div class="container">
      <div @click = "iSelected" class= "size_container" :class="{clicked:isActive}"> {{size}} </div>
  </div>
</template>

<script>
export default {
  name: 'SizesCard',
  props: {
    size: {
      type: String,
    },
    sizeSelected: {
      default:false
    }
  },
  computed: {
    isActive() {
      console.log('se ha cambiado')
      if(this.sizeSelected == this.size){
        return true
      }else{
        return false
      }
        
    }
  },
  methods: {
    iSelected() {
      this.$emit('sizePreference', this.size);
    }
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.size_container{
  border-radius: 7px;
  width: 100%;
  height: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: rgb(66, 66, 63);
  opacity: 0.6;
  color: white;
  text-align: center;
}
.clicked{
  transform: scale(1.2);
  opacity: 0.8;
}
.size_container:hover{
  transform: scale(1.2);
  opacity: 0.8;
}
</style>
