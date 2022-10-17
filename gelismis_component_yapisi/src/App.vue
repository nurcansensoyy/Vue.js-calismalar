<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">

        <button @click= "selectedComponent = 'appMemory'" class="btn-sm btn btn-primary">appMemory</button>
        <button @click="selectedComponent = 'appNewMemory'" class="btn-sm btn btn-primary">appNewMemory</button>
        <button @click= "selectedComponent = 'appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
        <hr>
        <p>{{selectedComponent}} </p>
        <hr>

        <keep-alive>   <!-- sayesinde component tekrardan render edilmeyecek-->
          
        <component :is = "selectedComponent">
          <h1 slot = "heading">Guzel Bir Gun</h1>
          <p slot = "content">Bu cok guzel bir aniydi...</p>
        </component>

        </keep-alive>

<!-- selectedComponent app-memory gibi seçicidir-->
        <!--<app-memory>
          <h1 slot = "heading">Guzel Bir Gun</h1>
          <p slot = "content">Bu cok guzel bir aniydi...</p>
        </app-memory>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory";
  import NewMemory from "./components/NewMemory.vue";
  import Author from "./components/Author.vue";

  export default {
    data : function(){
      return { 
        selectedComponent : "appMemory",
      }
    },
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,
      appAuthor : Author,
    }
  }
</script>
