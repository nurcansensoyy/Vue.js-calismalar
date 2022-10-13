<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici adi: {{name}}</p>
    <p>Kullanici adi: {{switchNAme()}}</p>
    <p>Kullanici yasi : {{age}}</p>
    <button @click="sendToParent">Veriyi parent a gonder</button>
  </div>
</template>


<script>
import {eventBus} from "../main.js";
export default {
  props : {
    name : {
      type :String,
      default :"videosinif.com"
    },
    age : Number,
  },//chill parent ilişkisi
  methods : {
    switchNAme(){
      return this.name.split("").reverse().join("");
    },
    sendToParent(){
      this.$emit("data","NurcanSensoy");
    },
    },
    created(){ //export default seviyesinde
      eventBus.$on("ageWasEdited",(age) => {
        this.age = age;
      }) ;
  }
}
</script>


<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
