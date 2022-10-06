new Vue({
    el : "#app",
    data : {
        counter : 0,
        secondCounter : 0,
    },
    methods : {
        result : function(){
            console.log( "method calisti...")
            return this.counter > 10 ? "10'dan buyuktur" : "10'dan kucuktur";
        }
    },
    computed : {
        output : function(){
            console.log("computed calisti...");
            return this.counter > 10 ? "10'dan buyuktur" : "10'dan kucuktur";
        }
    },
    watch :{ //data icindeki property leri izler 
        counter : function(value) {
            vm = this; //this e yukaridaki scope un icinde olmadiği icin ulasamaz biz de bu yüzden vm diye bir degiskene attik
            setTimeout(function(value){
                vm.counter = 0;
            },1500) // arttir a basip counter i arttirdiktan bir bucuk saniye sonra counter 0 olur.
        }
    }
});