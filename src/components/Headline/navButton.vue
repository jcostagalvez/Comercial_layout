<template>
    <div>
        <button :class="{presentRoute: isPresent}" @click="goToRoute(link.path)" class="buttonLink"> {{link.name}} </button>
    </div>
</template>

<script>
    export default {
        created () {
            if(this.link.path.includes(this.$route.name)){
                this.isPresent = true;
            }
        },
        props: {
            link: {
                type: Object
            }
        },
        data() {
            return {
                isPresent: false
            }
        },
        methods: {
            goToRoute(path) {
                if(!path.includes(this.$route.name)){
                    this.$router.push({path: path});
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.buttonLink{
    padding-bottom: 2%;
    all:unset;
    cursor: pointer;
}
.buttonLink:hover{
    transform: scale(1.2);
    //border-bottom: 2px solid rgba(212, 175, 55, 0.75);
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
}
.buttonLink:focus{
    border-bottom: 2px solid rgba(212, 175, 55, 1);
}
.presentRoute{
    border-bottom: 2px solid rgba(212, 175, 55, 1);
}
</style>