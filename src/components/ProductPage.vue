<template>
 <div class="">
    <NabarVue />
    <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#">Home</a>
                    <a class="breadcrumb-item text-dark" href="#">Shop</a>
                    <span class="breadcrumb-item active">Shop List</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->


    <!-- Shop Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <ProductFilter />


            <!-- Shop Product Start -->
            <div class="col-lg-9 col-md-8">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button class="btn btn-sm btn-light"><i class="fa fa-th-large"></i></button>
                                <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button>
                            </div>
                            <div class="ml-2">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Latest</a>
                                        <a class="dropdown-item" href="#">Popularity</a>
                                        <a class="dropdown-item" href="#">Best Rating</a>
                                    </div>
                                </div>
                                <div class="btn-group ml-2">
                                    <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">10</a>
                                        <a class="dropdown-item" href="#">20</a>
                                        <a class="dropdown-item" href="#">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span v-if="loading==1">
                        Loading.....
                    </span>
                    <ProductListing v-if="loading==false" :product="products" />
                    <div class="col-12" v-if="products.length>0">
                        <nav>
                          <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Shop Product End -->
        </div>
    </div>
    <!-- Shop End -->
     <Footer />
    </div>
</template>
<script>
import axios from 'axios';
import NabarVue from './NabarComponent.vue'
import Footer from './FooterComponent.vue'
import ProductListing from './product/ProductListing.vue';
import ProductFilter from './product/ProductFilter.vue';
export default{
    name:'ProductPage',
    components : {
        NabarVue,
        Footer,
        ProductListing,
        ProductFilter      
    } ,
    data(){
        return {
            cname: '',
            total: 0,
            categoryData: '',
            subCategoryData:'',
            products: [],
            loading: false
        }
    },
    methods:{
        productList(){
             this.products =  [];
             this.loading = true;
             this.cname = this.$route.params.category+ this.$route.params.sub_category
            let bodyParams = {
                brand: [],
                category: [],
                price: []
            };
            axios.post(`product/${this.$route.params.category}/${this.$route.params.sub_category}`,bodyParams )
            .then((result)=>{
            this.total = result.data.data.length
            this.products =  result.data.data
             this.loading = false;
            console.log('feched',this.products);
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