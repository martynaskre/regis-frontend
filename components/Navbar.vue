<template>
  <div>
    <div class="rect first"></div>
    <div class="rect second"></div>
    <div class="rect third"></div>
    <div class="rect forth"></div>
    <div class="rect fifth"></div>
    <div class="navSpacing">
      <h1>Regis</h1>
      <nuxt-link to="/auth/" class="btn"></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navSpacing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  position: relative;
  z-index: 11;
  cursor: pointer;
  width: 70px;
  margin-right: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid black;
  background-image: url('https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png');
  background-size: cover;
}
.rect {
  position: absolute;
  height: 90px;
  left: 0;
  top: 0px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 60px 0px;
}
.first {
  width: 20%;
  background: #4059ad;
  z-index: 10;
}
.second {
  width: 41%;
  background: #6b9ac4;
  z-index: 9;
}
.third {
  width: 61%;
  background: #97d8c4;
  z-index: 8;
}
.forth {
  width: 81%;
  background: #eff2f1;
  z-index: 7;
}
.fifth {
  width: 100%;
  background: #f4b942;
  z-index: 6;
  border-radius: 0;
}
h1 {
  position: relative;
  line-height: 90px;
  z-index: 11;
  font-size: 50px;
  margin-left: 10px;
}
</style>
