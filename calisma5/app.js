new Vue({
    el : "#app",
    data : {
        counter : 0,
        secondCounter : 0,
    },
    methods : {
        result : function(){
            console.log("method calisti...")
            return this.counter > 10 ? "10'dan buyuktur" : "10'dan kucuktur";
        }
    },
    computed : {
        output : function(){
            console.log("computed calisti...");
            return this.counter > 10 ? "10'dan buyuktur" : "10'dan kucuktur";
        }
    }
});