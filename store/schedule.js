export const actions = {
  async get({}, id) {
    try {
      const response = await this.$axios.get(`schedule/${id}`);

      return (response.data.hasOwnProperty('data'))
        ? response.data.data
        : [];
    } catch (e) {}

    return [];
  },
  async create({}, data) {
    try {
      await this.$axios.post('schedule', data);

      return true;
    } catch (e) {}

    return false;
  },
  async update({}, { id, ...data }) {
    try {
      await this.$axios.put(`schedule/${id}`, data);

      return true;
    } catch (e) {}

    return false;
  }
};
