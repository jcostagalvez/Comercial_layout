import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPage from '../views/ProductPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import CartPage from '../views/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductPage,
  },
  {
    path: '/product/:id',
    name: 'ProductsDetail',
    component: ProductDetailPage,
    meta:{
      transition: 'slowBiggy'
    }
  },
  {
    path: '/Cart',
    name: 'cartPage',
    component: CartPage
  },
  {
    path: '/',
    redirect: '/products',
  }
]

const router = new VueRouter({
  routes
})

export default router
