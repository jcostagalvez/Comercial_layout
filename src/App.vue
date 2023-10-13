<template>
  <div id="app" margin:0>
    <h1>FUEGO EN EL 23</h1>
    <router-view/>
  </div>
</template>

<style>
* { margin: 0 !important; }
html{
  margin: 0;
  padding: 0;
  background-color: #e3e4e5;
}
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
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

</style>
