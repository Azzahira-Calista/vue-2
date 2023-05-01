<template>
  <div class="footer">
    <div class="footer-atas">
      <div class="company">
        <p><b>Menu</b></p>
        <p>Beranda</p>
        <p>Meditasi Blog</p>
      </div>
      <div class="services">
        <p><b>Kontak</b></p>
        <p>
          <b>Smk Raden Umar Said Kudus</b><br />
          Jalan Sukun Raya No.09, Besito Kulon, Besito, Kec. Gebog, Kabupaten
          Kudus, Jawa Tengah 59333
        </p>
        <p>smkradenumarsaidkudus@gmail.com</p>
        <p>+62 0291 430202</p>
      </div>
      <div class="resources">
        <p><b>Resources</b></p>
        <p>kesehatan</p>
        <p>Curabitur egestas</p>
        <p>Curabitur egestas</p>
      </div>
    </div>
  </div>

  <div class="footer-bawah">
    <hr />
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style>
.footer {
  margin: auto;
  width: max-width;
  padding: 8rem;
  background-color: #395b64;
  font-family: "Montserrat", sans-serif;
}
.footer-atas {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: smaller;
  text-align: left;
}
.company {
  display: flex;
  flex-direction: column;
}
.services {
  display: flex;
  flex-direction: column;
}
.resources {
  display: flex;
  flex-direction: column;
}
p {
  margin: 5px;
}
</style>
