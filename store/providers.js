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
  },
  async forgotPassword(state, email) {
    try {
      await this.$axios.post('providers/forgot-password', {
        email,
      });

      return true;
    } catch (e) {
      //
    }

    return false;
  },
  async resetPassword(state, data) {
    try {
      await this.$axios.post('providers/reset-password', data);

      return true;
    } catch (e) {
      //
    }

    return false;
  },
  async getBusiness() {
    try {
      let response = await this.$axios.get('providers/business');

      return response.data.data;
    } catch (e) {}

    return null;
  }
}
