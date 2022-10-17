<template>
  <div>

    <div class="memory">
      <slot name = "heading"></slot>
    </div>
    <div class="memory">
      <slot name = "content"></slot>
      <!-- eger name eklenmemis bir slot varsa ona slot eklenmeyen bir slot u direkt alir buna default slot denir.-->
    </div>
    <div class="memory">
      <slot name = "author">
        <h1>Author</h1>
        <p>Buraya herhangi bir gelmemis!!!</p>
        <!-- eger slot name i ile işleşen bir slot bulamazsa içine kendimiz verileri yazabiliriz. Buna slot default denir.-->
      </slot>
    </div>
   
  </div>
</template>
<script>
export default{
  
}
</script>
<style scoped>
  div.memory {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
