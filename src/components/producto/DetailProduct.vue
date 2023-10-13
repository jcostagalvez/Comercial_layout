<template>
  <div  class="container">
      <div class="detail_container">
        <span class="name"> {{name}} </span>
        <span class="price">{{price}} $</span>
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
  height: 100%;
  display: flex;
  justify-content: center;
}
.detail_container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3%;
  padding: 2%;
  color: black;
}
.price{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
