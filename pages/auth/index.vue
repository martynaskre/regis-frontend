<template>
  <div>
    <BackRectangles />
    <div class="centerContainer">
      <div class="login-container">
        <h1>REGIS</h1>
        <nuxt-link to="/auth/login/client" class="btn">Client</nuxt-link>
        <nuxt-link to="/auth/login/provider" class="btn"
          >Service provider</nuxt-link
        >
        <nuxt-link to="/auth/signup" class="reg">Register</nuxt-link>
      </div>
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
  margin: auto 2% 1% auto;
  bottom: 0;
  color: #555555;
  font-family: 'Montserrat';
  text-decoration-line: underline;
  cursor: pointer;
  font-size: calc(15px + 0.9vw);
}
.reg:hover {
  transform: scale(0.98);
}
</style>
