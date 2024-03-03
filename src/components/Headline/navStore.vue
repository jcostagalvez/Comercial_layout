<template>
    <div class="container">
        <ul class="options-container">
            <li v-for="item in navItems" :key="item" class="options">
                <navButtom :link="item"></navButtom>
            </li>
        </ul>
        <headerStore class="head"></headerStore>
    </div>
</template>

<script>
import headerStore from './headerStore.vue';
import navButtom from './navButton.vue';
    export default {
        components:{
            headerStore,
            navButtom
        },
        data() {
            return {
                navItems: [{name:'Productos' ,path:'/products'}, 
                           {name:'Carrito' ,path:'/cart'}, 
                           /*{name:'Lista de deseos' ,path:'/cart'}*/]
            }
        },
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    border-image: linear-gradient(to bottom , #e8eaed, #e8eaed) 1;
    height:100%;
    width:100%;
}
.options{
    list-style-type: none;
    padding-right: 3%;
}
.options-container{
    width: 50%;
    display: flex;
}
.head{
    width: 50%;
    text-align: center;
}
</style>