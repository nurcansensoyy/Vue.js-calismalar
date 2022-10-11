<template>
<div>
  <p>Lamba Durumu : {{ status }}</p>

   <button @click = "openLamb">Lambayi Ac</button> 
</div>
</template>

<script>
export default {
    data : function(){
        return {
            status : "Kapali"
        }
    },
    methods :{
        openLamb(){
            this.status = "Acik"
        }
    }
}
</script>

<style>

</style>