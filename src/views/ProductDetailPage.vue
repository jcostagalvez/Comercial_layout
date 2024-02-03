<template>
  <transition name="fade"> 
      <div class="container">
        <div class="detailPage-container">
          <productDetailPage   class="detailPage-component" :product="product"/>
        </div>
      </div>
    <router-view></router-view>
  </transition>
</template>

<script>
  import productDetailPage from '../components/productoDetail/ProductDisplay.vue'

  export default {
    name: 'ProductDisplay',
    components:{
    productDetailPage
    },
    data() {
      return {
        product: this.$store.getters.getProductById(this.$route.params.id)
      }
    },
  };
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.detailPage-container{
  width: 100%;
  height: 80%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.detailPage-component {
  width: 60%;
  height: fit-content;
}

.fade-enter-active {
  transition: opacity 1s;
  transform: scale(1.1);
}
.fade-enter{
  transform: scale(1);
  opacity: 0;
}
</style>
