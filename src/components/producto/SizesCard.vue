<template>
  <div  class="container">
      <div> {{size }} </div>
  </div>
</template>

<script>
export default {
  name: 'SizesCard',
  props: {
    size: {
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
.container div{
  border-radius: 7px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: rgb(66, 66, 63);
  opacity: 0.6;
  color: white;
}

.container div:hover{
  transform: scale(1.2);
  opacity: 0.8;
}
</style>
