<template>
  <div class="cardContainer">
    <div class="cardContainerInside">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.cardContainerInside {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
