<template>
 <div class="">
    <NabarVue />
        <div>
            tetssttts {{cname}} {{total}}
        </div>
     <Footer />
    </div>
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
            cname: '',
            total: 0,
            categoryData: '',
            subCategoryData:''
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
            this.total = result.data.data.length
            });
        }
    },
    watch:{
        categoryData(v, prev){
            console.log(v, prev, '---categoryData')
            this.productList();
        },
        subCategoryData(v, prev){
            console.log(v, prev, '---subCategoryData')
            this.productList();
        }

    },
    created(){
        console.log('created')
        this.productList();
    },    
    updated () {
         console.log('updated')
         //this.categoryData = this.$route.params.category
          this.subCategoryData = this.$route.params.sub_category
       //this.productList();
    },
    unmounted () {
         console.log('unmounted')
    },
     mounted () {
         console.log('mounted')
        //this.productList();
    },
    
}
</script>