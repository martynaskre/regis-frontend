export const state = () => ({
  errors: {},
});

export const mutations = {
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
};
