export default function ({ $axios, store }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 422) {
      store.commit('errors/SET_ERRORS', error.response.data.errors);
    }
  })
}
