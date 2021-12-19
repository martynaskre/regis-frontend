<template>
  <div>
    <Navbar />
    <searchBox v-if="category" :defaultCategory="category.id" :defaultKeywords="this.query"/>
    <h2 v-if="category" class="text-center text-3xl mt-12 mb-1">{{ category.title }}</h2>
    <CardsBusinessesContainer>
      <p v-if="$fetchState.pending">Kraunami paslaugų teikėjai...</p>
      <p v-else-if="$fetchState.error">Įvyko klaida.</p>
      <template v-else>
        <p v-if="businesses.length === 0">Dėja, paslaugų teikėjų rasti nepavyko...</p>
        <CardsBusiness v-else
                       v-for="business in businesses"
                       :key="business.id"
                       @click="() => $router.push(`/business/${business.slug}/show`)"
                       :phoneNumber="'123'"
                       :logo="business.logo"
                       :cover="business.cover"
        >
          {{ business.title }}

          <template v-slot:address>
            {{ business.addressStreet }} {{ business.addressHouseNumber }}, {{ business.addressCity }}, {{ business.addressCountry }} {{ business.addressPostCode }}
          </template>

          <template v-slot:description>
            {{ business.shortDescription }}
          </template>
        </CardsBusiness>
      </template>
    </CardsBusinessesContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: null,
      query: null,
      businesses: [],
    }
  },
  async fetch() {
    this.query = this.$route.query.query;

    this.category = await this.$store.dispatch('categories/findCategoryBySlug', this.$route.params.slug);

    if (!this.category) {
      return this.$nuxt.error(404);
    }

    this.businesses = await this.$store.dispatch('businesses/fetchBusinesses', {
      category: this.category.id,
      ...((this.query) && {query: this.query}),
    })
  },
};
</script>
