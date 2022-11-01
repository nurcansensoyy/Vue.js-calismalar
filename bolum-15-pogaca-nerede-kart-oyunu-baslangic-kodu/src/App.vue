<template>
    <component
        :is="activeComponent" 
    ><!--activeComponent ile hangisini o an göstermek istediğimizi belirleriz-->

    </component>
</template>
<script>
import GameCards from "./components/GameCards.vue";
import Failure from "./components/Failure.vue";
import Celebrate from "./components/Celebrate.vue";

export default {
    components: {
        appGameCards: GameCards,
        appFailrue: Failure,
        appCelebrate : Celebrate,
    },
    data() {
        return {
            activeComponent : "app-game-cards"
        }
    }
}
</script>
<style></style>
