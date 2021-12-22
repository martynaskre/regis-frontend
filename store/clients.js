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
  },
  async forgotPassword(state, email) {
    try {
      await this.$axios.post('clients/forgot-password', {
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
      await this.$axios.post('clients/reset-password', data);

      return true;
    } catch (e) {
      //
    }

    return false;
  },
  async getBookings({}, { startDate } = {}) {
    const url = (startDate)
      ? `clientBooking/client?startDate=${startDate}`
      : 'clientBooking/client';
    try {
      const response = await this.$axios.get(url);

      return (response.data.hasOwnProperty('data'))
        ? response.data.data
        : [];
    } catch (e) {}

    return [];
  },
  async createBooking({}, data) {
    try {
      await this.$axios.post('clientBooking', data);

      return true;
    } catch (e) {}

    return false;
  },
  async getBooking({}, id) {
    try {
      const response = await this.$axios.get(`clientBooking/${id}`);

      return response.data.data;
    } catch (e) {}

    return null;
  }
}
