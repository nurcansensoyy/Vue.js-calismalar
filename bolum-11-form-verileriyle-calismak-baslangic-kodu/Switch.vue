<template>

<div>

  <div id ="on"
  @click="isOn=true"
  :class="{active : !isOn }">Kapalı
  </div>

  <div
  id="off"
  @click = "isOn = false"
  :class="{active : !isOn }">Kapalı
  </div>

</div>

</template>

<script>
export default {
    data() {
        isOn : true
    }

}
</script>

<style>

</style>