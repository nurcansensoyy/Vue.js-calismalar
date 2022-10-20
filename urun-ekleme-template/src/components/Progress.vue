<template>
    <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="50" aria-valuemin="0"
            aria-valuemax="100">
            {{currentItem}}/10 
            <!--0/10 yazan yerdeki 0 değişsin diye currentItem tanımladık ve dinamik olarak değişecek--> 
        </div>
    </div>
</template>

<script>
import eventBus from "../main";
export default {
    data() {
        return {
            currentItem: null,
            progress : null, //
        }
    },
    created() {
        eventBus.$on("progressBarUpdated", (productListCount) => {
            this.currentItem = productListCount; //0/10 yazan yere productList e eklenen kaddar ürünün sayı değeri gelecek
            this.progress = productListCount * 10;
        })
    }
}
</script>

<style>

</style>