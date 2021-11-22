export const getters = {
  clientLoggedIn(state) {
    return state.auth.loggedIn && state.auth.strategy === 'client';
  },
  providerLoggedIn(state) {
    return state.auth.loggedIn && state.auth.strategy === 'provider';
  },
  user(state) {
    return state.auth.user;
  },
};
