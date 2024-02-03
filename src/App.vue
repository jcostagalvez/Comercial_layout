<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
* { margin: 0 !important; }
html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e3e4e5;
}
#app {
  margin: 0;
  padding: 0;
  width: inherit;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e3e4e5;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

h1{
  color: #D4AF37;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-from,
.fade-leave-to{
  opacity:0
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3 ease-out;
  /* animation-name: afterDeath;
  animation-duration: 2s;
  */
}

@keyframes afterDeath{
  0% {
    opacity: 0;
    transform: translateX(0px);
  }
  25% {

  }
  50% {

  }
  75% {

  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }
}
</style>