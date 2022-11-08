<template>
  <ul class = "nav nav-pills">
    <router-link
    active-class="active" 
    to ="/"
    exact
    tag = "li">
        <a>Home</a>
    </router-link> 
    <!--active-class home veya user a bastığımızda hangisinin seçili olduğunu belli etmek için kullanılır -->

    <!-- exact ile to daki tam tanım neyse oranın seçili olduğunu göster diyoruz -->

    <!-- Router-link ile diyorum ki to ile gitmesi gereken yeri belirtiyorum
    tag ile sonunda görünmesi gerekeni yani li olmasını istedik -->

    <router-link active-class="active" to ="/user/1" tag ="li"> <a>User 1</a> </router-link> 
    <router-link active-class="active" to="/user/2" tag="li"> <a>User 2</a> </router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>