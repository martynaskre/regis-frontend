<template>
  <div>
    <BackRectangles />
    <div class="centerContainer">
      <div class="login-container">
        <h1>REGIS</h1>
        <Input
          class="logInput"
          name="email"
          type="text"
          placeholder="El. paštas"
          v-model="email"
        />
        <Input
          class="logInput"
          name="password"
          type="password"
          placeholder="Slaptažodis"
          v-model="password"
        />
        <nuxt-link :to="passwordResetUrl">Pamiršote slaptažodį?</nuxt-link>
        <button class="btn log" @click="submit">Prisijungti</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      type: null,
      email: null,
      password: null,
    };
  },
  computed: {
    passwordResetUrl() {
      return '/auth/forgot-password/' + this.type;
    },
  },
  mounted() {
    this.type = this.$route.params.type;

    if (!['provider', 'client'].includes(this.type)) {
      this.$router.push('/auth/');
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch(`${this.type}s/login`, {
        email: this.email,
        password: this.password,
      });
    },
  },
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
.logInput {
  position: relative;
  text-align: center;
  width: 60%;
}
h1 {
  margin-top: 0;
}
</style>
