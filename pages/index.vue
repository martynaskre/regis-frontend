<template>
  <div>
    <Navbar />
    <SearchBox />
    <CardsCardContainer>
      <p v-if="$fetchState.pending">Kraunamos kategorijos...</p>
      <p v-else-if="$fetchState.error">Įvyko klaida.</p>
      <template v-else>
        <p v-if="$store.state.categories.list.length === 0">
          Dėja, kategorijų nėra.
        </p>
        <CardsCard
          v-else
          v-for="category in $store.state.categories.list"
          :key="category.id"
          @click="() => $router.push(`/category/${category.slug}`)"
          :style="{ backgroundImage: `url(${category.illustrationUrl})` }"
        >
          {{ category.title }}
        </CardsCard>
      </template>
    </CardsCardContainer>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('categories/fetchCategories');
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
