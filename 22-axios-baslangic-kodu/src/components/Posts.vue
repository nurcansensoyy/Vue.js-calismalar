<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
      <div class="card m-1">
        <img class="card-img-top" src="https://i.ytimg.com/vi/a1kDpfwO16s/maxresdefault.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  created() {
    axios.get("https://vuejs-axios-blog-331e0-default-rtdb.firebaseio.com/posts/-NGqXZ073NEcLh1vGb1p/posts.json")
      .then(response => {
        console.log(response);
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
