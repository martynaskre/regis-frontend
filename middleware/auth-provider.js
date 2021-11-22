export default function ({ store, redirect }) {
  if (!store.getters.providerLoggedIn) {
    return redirect('/')
  }
}
