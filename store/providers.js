export const actions = {
  async login(state, data) {
    try {

      await this.$auth.loginWith('provider', {
        data,
      });
    } catch (e) {
      //
    }
  },
  async signup(state, data) {
    try {
      await this.$axios.post('providers/signup', data);

      await this.$router.push('/auth/login/provider');
    } catch (e) {
      //
    }
  }
}
