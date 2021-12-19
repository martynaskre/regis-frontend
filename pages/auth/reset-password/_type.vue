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
        <Input
          class="logInput"
          name="passwordConfirmation"
          type="password"
          placeholder="Pakartokite slaptažodį"
          v-model="passwordConfirmation"
        />
        <button class="btn log" @click="submit">
          Nustatyti slaptažodį
        </button>
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
      token: null,
      email: null,
      password: null,
      passwordConfirmation: null,
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    this.token = this.$route.query.token;

    if (!['provider', 'client'].includes(this.type) || !this.token) {
      this.$router.push('/auth/');
    }

    this.email = this.$route.query.email;
  },
  methods: {
    async submit() {
      const response = await this.$store.dispatch(`${this.type}s/resetPassword`, {
        token: this.token,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      });

      if (response) {
        this.$notify({
            group: 'success',
            title: 'Slaptažodis pakeistas!',
          }, 2000
        );

        await this.$router.push(`/auth/login/${this.type}`);
      }
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
</style>
