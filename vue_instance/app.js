var vm1 = new Vue({
  el: '#app1',
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

console.log(vm1);
console.log(vm1.$data ==data);
vm1.$refs.heading.innerText = "Bu ref tarafından değiştirilmiştir.";

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
})