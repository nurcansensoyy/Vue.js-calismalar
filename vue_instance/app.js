var vm1 = new Vue({
  
  data: {
    title: 'VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('VueJS Instance (Güncellendi)');
      this.$refs.myButton.innerText = "TEST";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title değişti, yeni değer : ' + value);
    }
  }
});

vm1.$mount("#app1");


var vm2 = new Vue({
    el : "#app2",
    data : {
        title : 'VueJS Instance 2'
    },
    methods : {
        changeTitle : function(){
            vm1.title = "instance 2 tarafından değiştirildi";
        }
    }
});

var vm3 = new Vue ({
    el : "#app3",
    template : "<h1>Merhabalar...</h1>"
    //kontrol altına aldığımız bloğun içerisindeki html yapısını belirtiriz
});

//vm3.$mount("#app3"); // mount edince template oluşur içinde app3 yazmasa bile

// vm3.$mount();
//document.getElementById('app3').appendChild(vm3.$el);
//yukarıda mount un içinde app yazılmadan template mount edebilme (yükleme) yolu gösterildi. 

