<template>
    <div>
        <button class="buttonLink"> {{link.name}} </button>
    </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>