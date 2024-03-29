<template>
    <div class="containerPopUp">
        <button  @click="closeWindow"><span>X</span></button>
        <h3> Gracias por su compra</h3>
    </div>
</template>

<script>
    export default {
        methods: {
            closeWindow() {
                this.$emit('closeModal', true); 
            }
        },
    }
</script>

<style lang="scss" scoped>
    .containerPopUp{
        background-color: rgb(227,228,229, 0.9);
        border-radius: 3px;
        width: 90%;
        height: 60%;
    }
    h3{
        color: #D4AF37;
        font-size: 200%;
        text-transform: uppercase;
        padding-top: 2%;
        padding-bottom: 3%;
        text-align: center;
    }

    p{
        text-align: center;
        padding-bottom: 6%;
    }
    button{
        padding-top: 2%;
        padding-left: 2%;
        border-style: none;
        background-color: rgba(0,0,0,.0);
        cursor: pointer;
    }
    button:focus{
        transform: scale(1.3);
    }
    button span {
        text-transform: uppercase;
        text-align: center;
        font-size: 140%;
    }
</style>