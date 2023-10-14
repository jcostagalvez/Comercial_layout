<template>
  <div  class="container">
      <div class="detail_container">
        <div class="name"> {{name}} </div>
        <div class="price">{{price}} $</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  props: {
    price: {
      type: String,
    },
    name: {
      type: String,
    },
  },

}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%
}
.detail_container{
  width: inherit;
  height: inherit;
  flex-direction: row;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  color: black;
}
.price{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.name{
  
}
</style>
