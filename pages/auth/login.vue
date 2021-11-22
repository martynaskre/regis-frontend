<template>
  <div>
    <BackRectangles />
    <div class="container">
      <h1>REGIS</h1>
      <input id="Email" type="text" placeholder="Email" />
      <input id="Password" type="text" placeholder="Password" />
      <nuxt-link to="/auth" class="btn log">Login</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';

.log {
  width: 40%;
  height: 9%;
  background: rgba(64, 89, 173, 0.85);
  margin-bottom: calc(10px + 0.5vw);
  color: white;
}
</style>
