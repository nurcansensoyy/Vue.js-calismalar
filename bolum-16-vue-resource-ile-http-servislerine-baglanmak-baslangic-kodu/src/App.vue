<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control"  v-model="username">
        </div>
        <button class="btn btn-primary" @click = "saveUser">Kaydet</button>
        <button class="btn btn-success" @click="getUser">Verileri Getir</button>
        <hr>
        <ul class="list-group">
          <li class="lis-group-item" v-for = "user in userList" :key="user">{{user.username}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      userList: [],
    }
  },
  methods: {
    saveUser() {
      
      this.$http.post("", { username: this.username }) //POST ISLEMI
        .then((response) => {
          console.log(response);
        
      })
    },
    getUser() {
      this.$http.get() //GET ISLEMI

        .then((response) => {
         //console.log(response);

          let data = response.data;//response.data verisi artık data içinde tutuluyor.

          for (let key in data) { // firebase in yapısından dolayı böyle bir işlem yapmak durumunda kaldık
           // console.log(data[key]); //data içerisindeki key e denk gelen kaydı bana getir dedik
            this.userList.push(data[key]); //data daki key e denk gelen objeyi userList array inin içine attık
          };
      })
    },
   
  }
}
</script>

<style>
</style>
