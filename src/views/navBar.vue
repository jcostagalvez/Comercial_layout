<template>
    <div>
        <navbar class="container"></navbar>
    </div>
</template>

<script>
import navbar from '../components/Headline/navStore.vue';
    export default {
        components:{
            navbar
        }
    }
</script>

<style lang="scss" scoped>
.container{
    height: 100%;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 4%;
}
</style>