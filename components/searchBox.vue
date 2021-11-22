<template>
  <div class="background">
    <div class="searchBar">
      <input type="text" id="Paslaugos" placeholder="Paslaugos" />
      <input type="text" id="Miestas" placeholder="Miestas" />
      <button>
        <div class="btn-square"></div>
        <div class="btn-triangle"></div>
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.background {
  display: flex;
  background-color: #6b9ac4;
  height: 550px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.searchBar {
  height: 70px;
  width: 50%;
  border-radius: 15px;
  display: inline-flex;
  align-items: center;
  background-color: white;
  z-index: 11;
}
input {
  z-index: 11;
  margin: 0;
  left: 0;
}
input:focus {
  outline: none;
}
#Paslaugos {
  width: 40%;
  border-right: 1px solid #e1e1e1;
}
#Miestas {
  width: 50%;
}
button {
  width: 55px;
  aspect-ratio: 1;
  background: #4059ad;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  margin: 0;
}
.btn-square {
  width: 21px;
  height: 7px;
  background: #ffffff;
}
.btn-triangle {
  width: 26px;
  aspect-ratio: 1;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 13px solid #ffffff;
}
</style>
