<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
<hr>
<button class="btn btn-success" @click="incAsync({time : 1000})">+ Async Arttır</button>


  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
  methods: {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement",
      "incAsync"
    ]),
    // increment() {
    //   this.$store.dispatch("increment")//actions lar dispatch ile çalıştırılır.
    // },
    // decrement() {
    //   this.$store.dispatch("decrement")
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incAsync")//actions lar dispatch ile çalıştırılır.
    // },
   
    // incrementCounter(){
    //   //this.$emit("counterEvent", 1);
    //   //this.$store.state.counter++;
    //   this.$store.commit("increaseCounter");//mutations çalıştırmak için commit kullanılır.
    // },
    // decrementCounter(){
    //  // this.$emit("counterEvent", -1);
    //   //this.$store.state.counter--;
    //   this.$store.commit("decreaseCounter");

    // }
  }
}
</script>

<style>
</style>
