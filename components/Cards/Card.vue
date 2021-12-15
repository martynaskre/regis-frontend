<template>
  <button class="card" @click="handleClick">
    <div class="cardName">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  width: 350px;
  height: 300px;
  margin: 50px 80px;
  background: gray;
  border-radius: 20px;
  background-size: cover;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.cardName {
  font-size: 35px;
  background: white;
  height: 80px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  text-align: center;
}
button:hover {
  transform: scale(0.98);
}
@media (max-width: 1100px) {
  .card {
    width: 350px;
    height: 250px;
    background-position: center;
    margin-left: 15px;
    margin-right: 15px;
  }
  .cardName {
    height: 45px;
    font-size: 28px;
  }
}
@media (max-width: 500px) {
  .card {
    width: 220px;
    height: 180px;
    background-position: center;
    margin-left: 15px;
    margin-right: 15px;
  }
  .cardName {
    height: 45px;
    font-size: 22px;
  }
}
</style>
