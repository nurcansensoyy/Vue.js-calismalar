new Vue({
   el : "#app",
   data : {
    player_heal : 100,
    monster_heal : 100,
    game_is_on : false,
    logs : [],
   },
   methods : {
    start_game : function(){
        this.game_is_on = true;
    },
    attack : function(){
        var point = Math.ceil(Math.random()* 10); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.monster_heal -= point;

        this.add_to_log({turn : "p", text : "OYUNCU ATAĞI ("+ point +")"});

        this.monster_attack(); //oyuncu her saldırdığında monster da ona saldırmalı.
    },
    special_attack : function(){
        var point = Math.ceil(Math.random()* 25);  // 25 yaptıkdaha güçlü saldırı olması için.
        this.monster_heal -= point;

        this.add_to_log({turn : "p", text : "ÖZEL OYUNCU ATAĞI ("+ point +")"});

        this.monster_attack();
    },
    heal_up : function(){ //İLK YARDIM
        var point = Math.ceil(Math.random()* 20); //math.ceil ile virgülsüz değer alırız 
        //this.monster_heal = this.monster_heal - point;
        this.player_heal += point;

        this.add_to_log({turn : "p", text : "İLK YARDIM ("+ point +")"});

        this.monster_attack();
    },
    give_up : function(){ //PES ET
        this.player_heal = 0;
        this.add_to_log({turn : "p", text : "OYUNCU PES ETTİ!!"});
    },
    monster_attack : function() {
        var point = Math.ceil(Math.random()* 15); 
        this.player_heal -= point;
        this.add_to_log({turn : "m", text : "CANAVAR ATAĞI ("+ point +")"});
    },
    add_to_log : function(log){
        this.log.push(log);
    }
   },
   watch : { //watch ile canlarını kontrol ettik

    player_heal : function(value){ //value burada player_heal ın aktif değişen değeridir 3 se3 5 se 5 
        if (this.player_heal <= 0){
            this.player_heal = 0;
            
            if(confirm("Oyunu KAYBETTİN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
            }
        }
        else if(this.player_heal >= 100){
            this.player_heal = 100;
        }
    },

    monster_heal : function(value){ //value burada monster_heal ın aktif değişen değeridir 3 se3 5 se 5 
        if (this.monster_heal <= 0){
            this.monster_heal= 0;

            if(confirm("Oyunu KAZANDIN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
            }
            
        }
   },
   }
});