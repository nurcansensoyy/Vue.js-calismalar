<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
<select class="form-control" v-model ="activeEffect"> <!--activeEffect i model olarak aldık fade için aşağıda bind ettik böylece fade ya da slide seçimimize göre animasyonu belirledik.-->
    <option value="fade">Fade</option>
    <option value="slide">Slide</option>
</select>
<br>

        <button class="btn btn-primary" @click="show = !show">Kutuyu göster</button>
        <br><br>

        <transition :name = "activeEffect" appear> <!--appear kullanımı ile sayfa ilk açıldığında animasyonun tetiklenmesi sağlanır-->
          <div class="alert alert-success" v-if="!show" >Bu bir alert kutusudur.</div>
        </transition>
        <hr>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-show ="!show" >Bu bir alert kutusudur.</div>
        </transition>
        <hr>
        <transition 
        enter-class=""
        enter-active-class="animated shake"
        leave-class=""
        leave-active-class="animated swing"
         appear>
          <div class="alert alert-warning" v-show="!show">Bu bir alert kutusudur.</div>
        </transition>
        <hr>
        <transition name="fade" mode ="out-in" appear>
          <!--appear kullanımı ile sayfa ilk açıldığında animasyonun tetiklenmesi sağlanır-->
          <div class="alert alert-success" v-if="show" key="success">Bu bir alert kutusudur.</div>
          <div class="alert alert-danger" v-else key="danger">Bu bir alert kutusudur.</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="showJS = !showJS">Kutuyu göster</button>
        <br><br>
        
        <transition 
        @before-enter = "beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @after-enter-cancelled="afterEnterCancelled"
        @before-leave= "beforeLeave"
        @leave="leave"
        @after-leave="afteLeave"
        @after-leave-cancelled="afterLeaveCancelled"
        >
          <div style="width:300px; background-color: #fbbd08; border:1px solid #666; width: 100px; height: 100px;" v-if="!showJS">Bu bir alert kutusudur.</div>
        </transition>

        <hr>
        <h3>Dinamik Componentler Arasında Geçiş...</h3>
        <button class="btn btn-danger" @click="appHome">Home</button>
        <button class="btn btn-primary" @click="appPost">Post</button>
        <br><br>
        <transition>
        <component :is="activeComponent" ></component>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Home from "./components/Home.vue";
export default {
  components: {
    appPost: Post,
    appHome : Home,

  },
  data() {
    return {
      show: false,
      activeEffect: "fade",
      showJS: false,
      elementWidth: 100,
      activeComponent: "appPost",
    }
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el,done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
      done();
    },
    afterEnter() {
      console.log("afterEnter");
    },
    afterEnterCancelled() {
      console.log("afterEnterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el,done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
      
    },
    afterLeave() {
      console.log("afterLeave");
    },
    afterLeaveCancelled() {
      console.log("afterLeaveCancelled");

    }

  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
/* .fade-leave{
  opacity: 1; //opacity zaten 1 ve gerek yok
} */
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;

}

.slide-enter{}

.slide-enter-active{
animation : slide-in 1s ease-out forwards ;
transition: opacity 0.5s;
}
.slide-leave{}

.slide-leave-active{
animation: slide-out 1s ease-out forwards;
transition: opacity 1s;
opacity: 0;
}

@keyframes slide-in {
from{
  transform: translateY(20px); /*20px aşağıdan yukarı gelmesi için */
}
to{
  transform: translateY(0px);
}
  
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
   
  }

  to {
    transform: translateY(20px);/*20px yukarıdan aşağı gelmesi için */
  }

}
</style>
