<template>
  <div>
    <div class="rect first"></div>
    <div class="rect second"></div>
    <div class="rect third"></div>
    <div class="rect forth"></div>
    <div class="rect fifth"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rect {
  position: fixed;
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
</style>
