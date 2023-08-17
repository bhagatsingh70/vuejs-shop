<template>
    <NabarVue />
        <div>
            tetssttts {{cname}}
        </div>
     <Footer />
</template>
<script>
import axios from 'axios';
import NabarVue from './NabarComponent.vue'
import Footer from './FooterComponent.vue'
export default{
    name:'CategoryPage',
    components : {
        NabarVue,
        Footer        
    } ,
    data(){
        return {
            cname: ''
        }
    },
    methods:{
        productList(){
             this.cname = this.$route.params.category+ this.$route.params.sub_category
            let bodyParams = {
                brand: [],
                category: [],
                price: []
            };
            axios.post(`product/${this.$route.params.category}/${this.$route.params.sub_category}`,bodyParams )
            .then((result)=>{
            console.log(result)
            });
        }
    },
    created(){
        console.log('created')
        this.productList();
    },    
    updated () {
         console.log('updated')
       // this.productList();
    },
    unmounted () {
         console.log('unmounted')
    }
    
}
</script>