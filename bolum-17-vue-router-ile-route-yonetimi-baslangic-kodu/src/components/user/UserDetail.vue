<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanıcı ID Bilgisi : {{$route.params.id}}    </p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{name : 'userEdit', params : {id : $route.params.id}, query : {name : 'nurcan', lastName : 'sensoy'} }"
    >Kullanıcıyı Düzenle</router-link>
  
  </div>
</template>
<script>
  export default {}
</script>
