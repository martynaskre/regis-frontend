<template>
  <div>
    <Navbar/>
    <div v-if="$store.getters.clientLoggedIn" class="mt-32">
      Hi client {{ $store.getters.user.firstName }}!

      <button @click="logout">Logout</button>
    </div>
    <div v-if="$store.getters.providerLoggedIn" class="mt-32">
      Hi provider {{ $store.getters.user.firstName }}!

      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
