<template>
  <div class="container" @mouseover = "enter" @mouseleave="leave">
    <div class="container-tag">
      <font-awesome-icon class="icon" icon="fa-solid fa-fire" style="color: #e00606;" />
      <span class="status"><p>↓ 60%</p></span>
    </div>
    <div class="imagen-container">
      <img :src="url">
    </div>
    <div class="hoover-container"> 
      <div class="hoover">
        <addCart  v-show="active" :class="{showAnimated:active}" class="cart-component"  :active="active"/>
      </div>
    </div>
  </div>
</template>

<script>
import jacket_arise from '../assets/aries-x-fila-flag-logo.jpg';
import addCart from '../components/producto/ProductCardHoover.vue';

export default {
  name: 'ProductImagen',
  components: {
    addCart,
    },
  data() {
    return {
      url: jacket_arise,
      active: false,
    }
  },
  methods: {
    enter: function() {
      this.active = true;
    },
    leave: function(){
      this.active = false;
    }
  },
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.container-tag{
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
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 117px -24px rgba(209,164,27,0.61);
  z-index: 2;
}
.hoover-container{
  display: flex;
  justify-content: center;
}
.hoover{
  width: 23%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.cart-component{
  position: absolute;
  transform: translateY(-97px);
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
