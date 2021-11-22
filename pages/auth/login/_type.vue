<template>
  <div>
    <BackRectangles />
    <div class="container">
      <h1>REGIS</h1>
      <Input name="email" type="text" placeholder="Email" v-model="email" />
      <Input name="password" type="password" placeholder="Password" v-model="password" />
      <button class="btn log" @click="submit">
        Login
      </button>
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

      console.log(this.$store.state.auth);
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
</style>
