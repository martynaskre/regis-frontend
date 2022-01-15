<template>
  <div>
    <Navbar />
    <div class="container container-sm business">
      <div class="business-header" :style="{ backgroundImage: `url('${business.cover}')` }">
        <img :src="business.logo" class="business-logo" />
        <Rating :rating="business.rating" />
      </div>
      <p class="business-description">
        {{ business.longDescription }}
      </p>
      <CardsServicesContainer>
        <CardsService v-for="(service, index) in services"
                      :key="index"
                      @click="() => $router.push(`/business/${business.slug}/services/${service.id}/book`)">
          {{ service.title }}

          <template v-slot:description>
            {{ service.description }}
          </template>

          <template v-slot:price>
            Kaina:
            <template v-if="service.maxPrice">
              {{ service.minPrice }}-{{ service.maxPrice}}Eur
            </template>
            <template v-else>
              {{ service.minPrice }}Eur
            </template>
          </template>
        </CardsService>
      </CardsServicesContainer>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, route, error }) {
    const slug = route.params.slug;

    const business = await store.dispatch('businesses/get', slug);

    if (!business) {
      error({ statusCode: 404, message: 'Toks verslas neegzistuoja.' });
    }

    const services = await store.dispatch('businesses/services', slug);

    return { business, services };
  },
};
</script>
