<template>
    <div class="">
        <h1 v-bind="$attrs">{{title}}</h1>
        <span> Child Component</span>
    </div>
</template>

<script>
    export default {
        name : 'ChildComponent',
        props : {
            title : {
                type: String,
                required: true,
                default : 'Article title'
            }
        },
        created() {
            console.log(this.$attrs)
        },
        inheritAttrs: false
    }
    
</script>
<style scoped>

</style>