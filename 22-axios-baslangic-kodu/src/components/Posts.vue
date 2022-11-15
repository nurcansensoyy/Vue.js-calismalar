<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for = "post in postList" :key="post" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
//import axios from "axios";
import customAxios from "../custom_axios"; // axios yerine bunu kullanıcaz artık
export default {
  data() {
    return {
      postList: []
    }
  },
  created() {
    customAxios.get("/posts.json")
      .then(response => {
        let data = response.data;
        for (let key in data) {
          this.postList.push({...data[key], id : key})//postList in içine push ladık kartları
        }
      })
    .catch(e=>console.log(e))
  }
}
</script>

<style>
  .card {
    width: 300px;
  }
</style>
