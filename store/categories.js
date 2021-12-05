export const state = () => ({
  list: [],
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.list = categories;
  }
}

export const actions = {
  async fetchCategories({ commit }) {
    try {
      let response = await this.$axios.get('categories');

      commit('SET_CATEGORIES', response.data.data);
    } catch (e) {
      //
    }
  },
  findCategoryBySlug({ state }, slug) {
    return state.list.find((category) => category.slug === slug);
  },
}
