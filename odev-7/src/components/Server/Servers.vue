<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <appServer v-for="server in servers" :key="server">{{server}}</appServer>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";

export default {
  components :{
    appServer : Server,
  },
data : function(){
    return {
        servers : [
            {id : 1, status : "Kritik"},
            {id : 2, status : "Normal"},
            {id : 3, status : "Tehlikede"},
            {id : 4, status : "Bilinmiyor"},
        ]
    }
}
}
</script>