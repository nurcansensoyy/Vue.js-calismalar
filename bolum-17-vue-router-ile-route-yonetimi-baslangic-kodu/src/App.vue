<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in"> 
                    <!-- router-view e animasyon ekleme -->
                    <router-view></router-view>
                </transition>
                <hr>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
    components: {
        appHeader: Header,
}
}
</script>

<style>
.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave {}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
        /*20px aşağıdan yukarı gelmesi için */
    }

    to {
        transform: translateY(0px);
    }

}

</style>
