export const state = () => ({
  errors: {},
});

export const getters = {
  hasAnyErrors(state) {
    return Object.keys(state.errors).length > 0;
  }
};

export const mutations = {
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
};
