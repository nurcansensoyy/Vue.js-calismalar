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
          <li class="lis-group-item" v-for = "user in userList" :key="user">
          <span>{{user.data.username}}</span>
          <button class="btn btn-xs btun-danger" @click="deleteUser(user.key)">Sil</button>
        </li>
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
      resource : {}
    }
  },
  methods: {
    saveUser() {
      
      // this.$http.post("users.json", { username: this.username }) //POST ISLEMI
      //   .then((response) => {
      //     console.log(response);

      // })

      //this.$resource("users.json").save({}, { username: this.username });

      this.resource.kaydet({},{username : this.username})
    },
    getUser() {

      this.$resource("users.json").get()

      // this.$http.get("users.json") //GET ISLEMI

        .then((response) => {
         //console.log(response);
          return response.json();
            
        }).then(data => {
          for (let key in data.userList) {
            this.userList.push(
              {
                key: key,
                data: data.userList[key],
              }
              )
            }
          })
    },
    deleteUser(userKey) {
      // this.$http.delete("users/" + userKey + ".json")

      this.$resource.delete("users/" + userKey + ".json")
    }
   
  },
  created() {
    const customActions = {
      kaydet: { method: "POST", url: "users.json" }
    };
    this.resource = this.$resource("users.json",{},customActions) //kendimize ait request tanımladık
  }
}
</script>

<style>
</style>
