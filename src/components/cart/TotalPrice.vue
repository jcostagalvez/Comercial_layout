<template>
  <div class="container" >
    <div class="container-total">
      <span> total: </span>{{totalPrice}}$
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartLine',
  props: {
    products: {
      type: Array,
    },
  },
  computed: {
    totalPrice() {
      return this.products.reduce((total, curVal) => { return total + parseFloat(curVal.producto.price);}, 0)
    }
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.container-total{
  padding-top: 3%;
  display: flex;
  justify-content: end;
}
.container-total span{
  text-transform: capitalize;
}
</style>
