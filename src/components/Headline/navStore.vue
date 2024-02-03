<template>
    <div class="container">
        <ul id="example-1">
            <li v-for="item in navItems" :key="item" class="listOptions">
                <navButtom :link="item"></navButtom>
            </li>
        </ul>
        <headerStore></headerStore>
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
                navItems: [{name:'Productos' ,path:'/'}, 
                           {name:'Carrito' ,path:'/Cart'}, 
                           {name:'Lista de deseos' ,path:'/Cart'}]
            }
        },
    }
</script>

<style lang="scss" scoped>
.container{
    height:100%;
    width:100%;
}
.listOptions{
    list-style-type: none;
}
</style>