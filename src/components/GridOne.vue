<template>
  <div class="o-container">
    <h1 class="jji">Jenis-Jenis Introvert</h1>
    <div class="o-grid">
      <div class="o-item">
        <img alt="icon" src="@/assets/icon.svg" /> <br/>
        Introvert
      </div>
      <div class="o-item">
        <img alt="icon" src="@/assets/icon.svg" /><br/>
        Anxious Introvert
      </div>
      <div class="o-item">
        <img alt="icon" src="@/assets/icon.svg" /><br/>
        Thinking Introvert
      </div>
      <div class="o-item">
        <img alt="icon" src="@/assets/icon.svg" /><br/>
        Restrained Introvert
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.o-container {
  margin: auto;
  width: 70rem;
}
.o-container h1 {
  color: #2c3e50;
  font-size: 64px;
}
.o-grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  gap: 15px;
}
.o-item {
  background-color: #395b64;
  padding: 30px;
  font-size: 18px;
  text-align: center;
  border-radius: 1rem;
  color: white;
}
.jji {
  margin-top: 200px;
}
.o-item img {
  width: 8rem;
}
</style>
