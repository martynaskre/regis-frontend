<template>
  <div>
    <BackRectangles />
    <div class="centerContainer">
      <div class="login-container">
        <h1>REGIS</h1>
        <p v-if="successful" class="mb-2">Slaptažodžio atkūrimo laiškas išsiųstas į el. paštą.</p>
        <Input
          class="logInput"
          name="email"
          type="text"
          placeholder="El. paštas"
          v-model="email"
          :disabled="disabled"
        />
        <button class="btn log"
                :disabled="disabled"
                @click="submit">
          Atkurti slaptažodį
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
      email: null,
      successful: false,
      disabled: false,
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
      this.successful = await this.$store.dispatch(`${this.type}s/forgotPassword`, this.email);

      if (this.successful) {
        this.$notify({
            group: 'success',
            title: 'Slaptažodžio atkūrimo laiškas išsiųstas!',
          }, 3000
        );

        this.disabled = true;

        this.$store.commit('errors/SET_ERRORS', {});
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
