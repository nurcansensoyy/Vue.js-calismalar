<template>
<div class="row product-container">
    <app-product v-for = "product in productList" :key = {product}>
        <img class="card-img-top" :src="product.selectedImage" :alt="product.title">
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <small>
                <strong>Adet : </strong>{{product.count}}
            </small>
            <br>
            <small>
                <strong>Fiyat : </strong>{{product.price}}
            </small>
            <br>
            <small>
                <strong>Tutar : </strong> {{product.totalPrice}}
            </small>
        </div>
    </app-product>
    </div>



</template>

<script>

import { eventBus } from "../main";
 import Product from "./Product.vue"
export default {
    components: {
        appProduct : Product,
    },
    data() {
        return {
            productList: [],
       }
    },

    created() { // newpeoduct tan gelen emit i dinliyor $on ile
        eventBus.$on("productAdded", (product) => { //productAdded ı okuyor ve gelen product ı productList e ekliyor
            if (this.productList.length < 2) {
                this.productList.push(product);
                eventBus.$emit("progressBarUpdated",this.productList)
            } else {
                console.log("Daha fazla ürün ekleyemezsiniz!!")
            }
        } 
        ); 
    }


}
</script>

<style>

</style>