export const state = () => ({
  counter: 0
})

export const actions = {
  async login(state, data) {
    try {
      let response = await this.$auth.loginWith('client', {
        data,
      });
    } catch (e) {
      //
    }
  },
  async signup(state, data) {
    try {
      await this.$axios.post('clients/signup', data);

      await this.$router.push('/auth/login/client');
    } catch (e) {
      //
    }
  }
}