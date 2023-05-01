<template>
  <div class="root-container">
    <div class="judul-container">
      <h1>Memahami</h1>
      <h2>Bersosialisasi</h2>
    </div>
    <Pengertian />
    <div class="proses-color">
      <div class="proses">
        <div class="sub-judul">
          <h1>Proses Dalam</h1>
          <h2>Bersosialisasi</h2>
        </div>
        <p class="p-proses">
          Pada proses sosialisasi terdapat juga hal yang membentuk kepribadian
          manusia atau pun dirimu, berikut ada tiga proses sosialisasi yang
          perlu kamu ketahui:
        </p>
        <div class="row">
          <div class="column">
            <div class="item-1">
              <h1>01</h1>
              <img src="../assets/rec.png" />
              <h3>Internalisasi nilai-nilai</h3>
              <p class="p-123">
                Proses penanaman dan pembiasaan nilai dan norma sosial ke dalam
                diri individu yang berlangsung sejak lahir hingga meninggal.
              </p>
            </div>

            <div class="item-3">
              <h1>03</h1>
              <img src="../assets/rec.png" />
              <h3>Pendewasaan diri</h3>
              <p class="p-123">
                Proses ini merupakan penggabungan dari belangsungnya proses
                internalisasi dan enkulturasi. Proses ini bisa dikatakan sudah
                memasuki fase dewasa dan siap memegang tanggung jawab
              </p>
            </div>
          </div>
          <div class="item-2">
            <h1>02</h1>
            <img src="../assets/rec.png" />
            <h3>Enkulturasi</h3>
            <p class="p-123">
              Proses pengembangan yang berasal dari nilai-nilai budaya yang
              sudah tertanam dalam diri seseorang dan menjadi kebiasaan dalam
              perilaku sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Grid1 />
    <Grid2 />
    <div class="meditasi">
      <div class="tulisan">
        <h1>
          Jadilah untuk dirimu sendiri, kami hadir untuk membantumu disini.
        </h1>
        <p>
          Dengan meditasi kamu dapat membuat pikiran pada dirimu mu menjadi
          lebih baik terhadap dirimu serta membangun kembali kepercayaan dirimu
        </p>
        <a href="MulaiView.vue">
          <div class="button">Mulai Meditasi</div>
        </a>
      </div>
      <img alt="meditasi-img" src="../assets/RecButton.svg" />
    </div>
    <Quote />
  </div>
</template>

<script>
import Pengertian from "@/components/PengertianBersosialisasi.vue";
import Grid1 from "@/components/GridOne.vue";
import Grid2 from "@/components/GridTwo.vue";
import Quote from "@/components/QuotesView.vue";
export default {
  components: {
    Pengertian,
    Grid1,
    Grid2,
    Quote,
  },
};
</script>

<style>
html {
  background-color: #e4dccf;
  margin: auto;
}

.root-container {
  margin: auto;
}

.proses-color {
  background-color: #698a8c;
  margin-top: 150px;
}
.proses {
  margin: auto;
  width: 70rem;
  padding: 10px;
}

img {
  width: 300px;
  border-radius: 1rem;
}
.judul-container {
  margin-top: 150px;
}
.judul-container h1 {
  text-align: left;
  margin-left: 60px;
  font-size: 64px;
}
.judul-container h2 {
  text-align: left;
  font-family: "Caveat", cursive;
  margin-left: 100px;
  color: #7d9d9c;
  font-size: 96px;
}

.sub-judul {
  margin-top: 100px;
  text-align: left;
}
.sub-judul h1 {
  color: white;
}
.sub-judul h2 {
  color: #1f1f36;
  font-family: "Caveat", cursive;
}
.p-proses {
  text-align: left;
  color: white;
}
.row {
  display: flex;
  flex-direction: row;
  margin: 50px;
  align-items: center;
}
.column {
  display: flex;
  flex-direction: column;
}
.item-2 {
  margin-top: 140px;
}
.p-123 {
  color: white;
}
.meditasi {
  margin-top: 100px;
  text-align: left;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  background-color: #395b64;
  width: 70%;
}
.tulisan {
  margin: 10px;
}
.button {
  border: solid white 1px;
  padding: 5px;
  border-radius: 7px;
  width: fit-content;
  color: white;
  margin-bottom: 20px;
}
.tulisan h1,
p {
  color: white;
}
</style>
