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
  },
  async create({}, data) {
    try {
      await this.$axios.post('business/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return true;
    } catch (e) {}

    return false;
  },
  async update({}, { id, data }) {
    try {
      await this.$axios.put(`business/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return true;
    } catch (e) {}

    return false;
  },
  async services({}, id) {
    try {
      let response = await this.$axios.get(`business/${id}/services`);

      return response.data.data;
    } catch (e) {}

    return [];
  },
  async get({}, idOrSlug) {
    try {
      let response = await this.$axios.get(`business/${idOrSlug}`);

      return response.data.data;
    } catch (e) {}

    return null;
  }
}
