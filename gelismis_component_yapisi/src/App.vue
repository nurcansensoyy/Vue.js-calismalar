<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <app-memory content = "Bu çok güzel bir anıdır..."></app-memory>
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./Memory";

  export default {
    components : {
      appMemory : Memory
    }
  }
</script>
