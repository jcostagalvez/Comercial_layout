<template>
  <div>
    <navStore class="nav"></navStore>
    <transition name="final-screen">
      <squareWindow class="finalScreen" v-show="modalOpen" @closeModal="closeModal"></squareWindow>
    </transition>
    <div class="productCart">
      <div class="cart-container">
        <cartPage @delete-id="deleteProduct" :products="products"/>
      </div>
      <div class="button-container" @click="openModal">
        <checkoutButton > 
          CHECKOUT
        </checkoutButton>
      </div>
    </div>
  </div>
</template>

<script>
  import cartPage from '../components/cart/CartDisplay.vue'
  import checkoutButton from '../components/cart/cartButton.vue'
  import squareWindow from '../components/ModalsWindows/squareModal.vue'
  import navStore from './navBar.vue';
  export default {
    name: 'CartPage',
    data() {
      return {
        products:[],
        modalOpen: false
      }
    },
    components: {
      cartPage,
      navStore,
      checkoutButton,
      squareWindow
    },
    beforeCreate(){
      if(this.$store.state.products.length > 0) {
        this.$store.dispatch('getUserCart')
        .then(() => {
          this.products = this.$store.getters.getProductsIncart;
        })
        .catch(error => console.log('error: ' + error))
      }else {
        this.$store.dispatch('getProducts')
        .then(() => {
          this.$store.dispatch('getUserCart')
          .then(() => { 
            this.products = this.$store.getters.getProductsIncart;
          })
          .catch(error => console.log('error: ' + error))
        })
        .catch(error => console.log('error: ' + error))
      }

    },
    methods: {
      deleteProduct(id) {
        this.$store.dispatch('deleteCartProduct', id);
        this.products = this.products.filter(producto => producto.cartId != id);
      },
      closeModal(event){
        this.modalOpen= !event
      },
      openModal(){
        this.$store.dispatch('emptyCart');
        this.modalOpen = true;
      }
    }
  };
</script>

<style scoped>
.productCart{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-container{
  padding-top: 5%;
  padding-bottom: 2%;
  width: 80%;
}
.button-container{
  display: flow;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 40%;
  height: 5%;
}
.finalScreen{
  position: fixed;
  height: 35%;
  z-index: 10;
  top: 24%;
  left: 5%;
}

.final-screen-enter-active,
  .final-screen-leave-active {
    transition: opacity 0.3s;
  }

  .final-screen-enter,
  .final-screen-leave-to {
    opacity: 0;
  }
</style>
