<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>User ID : {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Home Component</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id : this.$route.params.id //routes.js teki id ye erişiyoruz.
    }
  },
  methods: {
    navigateToHome() {
      // 1. yöntem this.$router.push("/")
      //2. yöntem this.$router.push({path : '/'})
      this.$router.push({ name: 'anasayfa' }) //3. yöntem
      //javascript üzerinden root lar arasında geçiş yaptık 3 farklı yöntemle
    }
    }
  }
</script>
