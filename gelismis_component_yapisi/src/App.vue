<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <app-memory>
          <h1 slot = "heading">Guzel Bir Gun</h1>
          <p slot = "content">Bu cok guzel bir aniydi...</p>
        </app-memory>
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
