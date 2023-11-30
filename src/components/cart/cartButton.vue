<template>
  <div class="container" >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'CartButton',
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 8px;
  background-color: rgb(212, 183, 18);
  opacity: 1;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
