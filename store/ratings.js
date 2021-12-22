export const actions = {
  async saveRating({}, { uuid, rating }) {
    try {
      await this.$axios.post(`rating/${uuid}`, {
        rating,
      });

      return true;
    } catch (e) {}

    return false;
  },
  async getBookingByUuid({}, uuid) {
    try {
      const response = await this.$axios.get(`rating/${uuid}`);

      return response.data.data;
    } catch (e) {}

    return null;
  }
};
