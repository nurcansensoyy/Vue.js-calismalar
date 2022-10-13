<template>
  <div class="container">
    
    <appHeader></appHeader>
    

    <hr>
    <div class="row">

      <app-servers></app-servers>
      <app-servers-details></app-servers-details>

      
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";
import Footer from "./components/Common/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
export default {
  components :{
    appHeader : Header, 
    "app-footer" : Footer, //eger - kullanmazsak isimlendirmede tırnak kullanamamıza gerek yok , yukarıdaki gibi
    "app-servers" : Servers,
    "app-servers-details" : ServerDetails
  }
}
</script>

<style>

</style>
