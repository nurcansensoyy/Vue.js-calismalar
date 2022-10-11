<template>
<div>
<lamb-status v-for="lamb in 5" :key="lamb" > </lamb-status>
</div>
</template>

<script>
import LambStatus from "./LambStatus.vue"
export default {
    components :{
       "lamb-status" : LambStatus
    }
}
</script>

<style>

</style>