export default function ({ store, redirect }) {
  if (!store.getters.clientLoggedIn) {
    return redirect('/')
  }
}
