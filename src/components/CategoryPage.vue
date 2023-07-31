<template>
    <div>
    tetssttts {{cname}}
    </div>
</template>
<script>
export default{
    name:'CategoryPage',
    data(){
        return {
            cname: ''
        }
    },
    created(){
        this.cname = this.$route.params.name
    }
}
</script>