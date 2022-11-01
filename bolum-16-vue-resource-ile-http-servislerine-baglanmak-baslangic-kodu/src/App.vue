<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control"  v-model="username">
        </div>
        <button class="btn btn-primary" @click = "saveUser">Kaydet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username : null
    }
  },
  methods: {
    saveUser() {
      
      this.$http.post("https://vuejs-vue-resource-d030f-default-rtdb.firebaseio.com/users.json", { username: this.username }) //POST ISLEMI
        .then((response) => {
          console.log(response);
        
      })
   }
  }
}
</script>

<style>
</style>
