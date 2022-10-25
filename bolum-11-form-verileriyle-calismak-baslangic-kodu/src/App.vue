<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input type="text" id="username" class="form-control" v-model="userData.username">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input type="password" id="password" class="form-control" v-model = "userData.password">
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input type="number" id="age" class="form-control" v-model = "userData.age">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea 
                  v-model="userData.message"
                  id="message" 
                  rows="3" 
                  class="form-control"><!--buraya userData.message yazarsak çalışmaz--></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input v-model="userData.interests" type="checkbox" value="yazilim"> Yazılım
                    </label>
                    <label>
                      <input v-model="userData.interests" type="checkbox" value="donanim"> Donanım
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input v-model="userData.gender" type="radio" value="erkek"> Erkek
                  </label>
                  <label>
                    <input v-model="userData.gender" type="radio" value="kadin"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select class="form-control">
                    <option 
                    :selected = "city == 'adana'" 
                    v-for="city in userData.cities" :key="city">{{city}}</option><!--:selected ile default adana nın gelmesi sağlandı-->
                  </select>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Form Verileri</h4>
            </div>
            <div class="panel-body">
              <p>Kullanıcı Adı:{{userData.username}}</p>
              <p>Şifre:{{userData.password}}</p>
              <p>Yaş:{{userData.age}}</p>
              <p style="white-space: pre;">Açıklama:{{userData.message}} </p> <!--white-space:pre ile alt satıra geçme da gösterilir-->
              <p><strong>İlgi Alanları</strong></p>
              <ul>
                <li v-for="item in userData.interests " :key="item">{{item}}</li>
              </ul>
              <p>Cinsiyet:{{userData.gender}}</p>
              <p>Şehir:{{userData.cities}}</p>
              <p>Toggle:</p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userData : {
      username: '',
      password: '',
        age: 30,
        message: '',
        interests: [],
        gender: '',
      cities : ["istanbul","ankara","adana","izmir","bursa",]
      
      }

      }
    }
  }
</script>

<style>

</style>
