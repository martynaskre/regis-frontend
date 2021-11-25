<template>
  <div class="cardContainer">
    <div class="cardContainerInside">
      <div v-for="name in names" :key="name" class="test"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      names: ['1', '2', '3', '4', '5', '6'],
    };
  },
};
</script>

<style scoped>
.cardContainer {
  width: 100%;
  height: 500px;
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
.test {
  width: 350px;
  height: 250px;
  margin: 50px 80px;
  background: gray;
  border-radius: 20px;
}
</style>
