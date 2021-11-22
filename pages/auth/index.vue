<template>
  <div>
    <BackRectangles />
    <div class="container">
      <h1>REGIS</h1>
      <nuxt-link to="/auth/login/client" class="btn">Client</nuxt-link>
      <nuxt-link to="/auth/login/provider" class="btn">Service provider</nuxt-link>
      <nuxt-link to="/auth/signup" class="btn reg">Register</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
};
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
.btn {
  width: 60%;
  height: 12%;
  background: rgba(64, 89, 173, 0.85);
  color: white;
  margin: calc(10px + 0.8vw);
  padding-top: 0.3vw;
}
.reg {
  position: absolute;
  width: 20%;
  right: -6%;
  bottom: -7%;
  background: transparent;
  color: #555555;
  font-family: 'Montserrat';
  text-decoration-line: underline;
}
</style>
