np<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click = "selectedComponent = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click = "selectedComponent = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click = "selectedComponent = 'appRed'" class="btn btn-danger">Kirmizi Temayı Yukle</button>
                <hr>
                <component :is = "selectedComponent">
                    <h1>{{selectedComponent}} Mavi</h1>
                    <p>Sensoy</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data : function(){
            return {
            selectedComponent : "appBLue" 
        }
    }
    }
</script>

<style>
</style>
