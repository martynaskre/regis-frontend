export const actions = {
  async fetchBusinesses({ commit }, query = {}) {
    try {
      const params = new URLSearchParams(query);

      const url = (Object.keys(query).length > 0)
        ? `business?${params.toString()}`
        : 'business';

      let response = await this.$axios.get(url);

      return response.data.data;
    } catch (e) {
      //
    }

    return [];
  },
  async fetchBookings({}, { businessId }) {
    try {
      let response = await this.$axios.get(`business/${businessId}/bookings`);

      return response.data.data;
    } catch (e) {}
  }
}
