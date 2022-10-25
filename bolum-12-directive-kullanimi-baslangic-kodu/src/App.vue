<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay="'green'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae culpa doloribus, ex
          facilis fugiat, fugit magni molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas ratione sequi
          unde ut!</p>
          <p v-color.delay="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae
            culpa doloribus, ex
            facilis fugiat, fugit magni molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas ratione sequi
            unde ut!</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  directives: { //local olarak directive tanımlama
    "color": {
      bind(el, binding, vnode) {
        if (binding.modifiers["delay"]) {
          setTimeout(() => {
            if (binding.arg == "background") { //eğer background varsa arka planın rengi değişecek yoksa yazının rengi kırmızı olacak
              el.style.backgroundColor = binding.value; //binding.value ile string veriyi aldık
            } else {
              el.style.color = binding.value;
            }
          }, 2000);

        } else {
          if (binding.arg == "background") { //eğer background varsa arka planın rengi değişecek yoksa yazının rengi kırmızı olacak
            el.style.backgroundColor = binding.value; //binding.value ile string veriyi aldık
          } else {
            el.style.color = binding.value;
          }
        }
      }
      }
    }
  }
</script>

<style>

</style>
