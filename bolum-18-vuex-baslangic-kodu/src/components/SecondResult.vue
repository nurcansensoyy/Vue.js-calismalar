<template>
    <div>
        <p class="counter-container"> Sayaç : {{ double }}</p>
        <hr>
        <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>
        <hr>
        <input type="text" v-model = "value" >
        <p>{{value}}</p>
       
    </div>
</template>
<script>
import {mapGetters} from 'vuex'; //computed de kullanılır sürekli yeni method tanımlamayı engeller mapGetters store daki getters daki fonksiyonları getirir içine bir array ya da obje alır
import { eventBus } from '../../../bolum-8-componentler-arasi-iletisim-baslangic-kodu/src/main';
export default {
    // props: ["counter"],
    computed: {
        ...mapGetters({ //... kullanımı ile mapGetters ve computed ın kendi methodlarını beraber yazabilmiş olduk.
            double: 'getDoubleCounter',
            stringC: 'stringCounter'
        }),

        value: {
            get() {
                return this.$store.getters.getValue; 
            },
            set(value) {
               this.$store.dispatch("setValueData", value);
            }
        }
    },
    
}

</script> 
<style scoped>
.counter-container {
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
}
</style>
