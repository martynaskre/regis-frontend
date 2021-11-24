<template>
  <div class="cardContainer">
    <div v-for="name in names" :key="name" class="test"></div>
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
  margin: auto;
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}
.test {
  width: 350px;
  height: 250px;
  margin: 20px 5%;
  background: blue;
  border-radius: 20px;
}
#app {
  text-align: center;
}
</style>
