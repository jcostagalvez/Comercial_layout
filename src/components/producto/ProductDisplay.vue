<template>
  <div class="container" >
    <div class="product-container" @mouseover = "enter" @mouseleave="leave">
      <div class="tag-container">
        <font-awesome-icon class="icon" icon="fa-solid fa-fire" style="color: #e00606;" />
        <!-- <span class="status" v-show="product.discount.haveDiscount"><p>↓ {{product.discount.discount}}%</p></span> -->
      </div>
      <div class="imagen-container">
        <img :src="imageSource" @click="goToProduct(product.id)" :id="product.id">
      </div>
      <div class="hoover-container"> 
        <div class="hoover">
          <addCart  @isAdded="addToCart" v-show="active" :class="{showAnimated:active}" class="cart-component"  :sizes="product.sizes"/>
        </div>
      </div>
      </div>
    <div class="detail-container">
      <detailProduct :name="product.name" :price="product.price"/>
    </div>
  </div>
</template>

<script>
import addCart from './ProductCardHoover.vue';
import detailProduct from './DetailProduct.vue'
export default {
  name: 'ProductDisplay',
  components: {
    addCart,
    detailProduct,
    },
  data() {
    return {
      active: false
    }
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    enter: function() {
      this.active = true;
    },
    leave: function(){
      this.active = false;
    },
    goToProduct(Id){
    this.$router.push({path: `/product/${Id}`})
    },
    addToCart(){
      this.$store.dispatch('addCartProduct', this.product._id);
    },
  },
  computed: {
    imageSource() {
      if(this.product.img.startsWith("data:image/png;base64")){
        return this.product.img
      }else{
        return `data:image/png;base64,${this.product.img}`
      }
    },
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.tag-container{
  position: relative;
  top: 25px;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
}
.status {
  width: 25%;
  text-align: center;
  background-color: black;
  padding: 0.5%;
  border-radius: 40px;
  color:white;
  cursor: context-menu;
}
.icon{
  cursor: pointer; 
}
.icon:hover{
  transform: scale(1.2); 
}
.imagen-container img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 117px -24px rgba(209,164,27,0.61);
  z-index: 2;
  cursor: pointer;
}
.hoover-container{
  display: flex;
  justify-content: center;
}
.hoover{
  width: 23%;
  display: flex;
  justify-content: center;
}
.cart-component{
  position: absolute;
  transform: translateY(-108px);
  width: inherit;
  height: auto;
}
.showAnimated{
  animation: slidein 0.5s ease-in;
}

@keyframes slidein{
  0%{
    transform: translateY(0px);
    opacity: 0;
  }
  80% {
    opacity: 0;
  }

  100%{
    transform: translateY(-97px);
    opacity: 1;
  }
}
</style>