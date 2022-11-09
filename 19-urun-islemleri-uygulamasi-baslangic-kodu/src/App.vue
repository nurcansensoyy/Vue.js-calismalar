<template>
  <div>
    <app-header></app-header>
    <app-container></app-container>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from './components/shared/Footer.vue';
import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProductSell.vue";
import ProductList from "./components/products/ProductList.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    
    appContainer: ProductList
    
  }
}
</script>

<style>

</style>