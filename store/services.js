export const actions = {
  async fetch() {
    try {
      let response = await this.$axios.get('service');

      return response.data.data;
    } catch (e) {}

    return [];
  },
  async create({}, data) {
    try {
      await this.$axios.post('service', data);

      return true;
    } catch (e) {}

    return false;
  },
  async get({}, id) {
    try {
      let response = await this.$axios.get(`service/${id}`);

      return response.data.data;
    } catch (e) {}

    return null;
  },
  async update({}, { id, ...data }) {
    try {
      await this.$axios.put(`service/${id}`, data);

      return true;
    } catch (e) {}

    return false;
  },
  async delete({}, id) {
    try {
      await this.$axios.delete(`service/${id}`);

      return true;
    } catch (e) {}

    return false;
  },
};
