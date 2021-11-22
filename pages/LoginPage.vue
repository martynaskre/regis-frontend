<template>
  <div>
    <backRectangles />
    <div class="container">
      <h1>REGIS</h1>
      <input id="Email" type="text" placeholder="Email" />
      <input id="Password" type="text" placeholder="Password" />
      <nuxt-link to="/CustomerMain" class="btn log">Login</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import backRectangles from '../components/backRectangles.vue';

export default {
  components: {
    backRectangles,
  },
};
</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';

.log {
  width: 40%;
  height: 9%;
  background: rgba(64, 89, 173, 0.85);
  margin-bottom: calc(10px + 0.5vw);
  color: white;
}
</style>
