<template>
  <div>
    <Navbar />
    <div class="p-10 flex justify-end">
      <button class="button button-info" @click="() => $router.push('/business/services/create')">
        Pridėti paslaugą
      </button>
    </div>
    <div class="container container-sm">
      <CardsServicesContainer>
        <CardsService v-for="(service, index) in services" :key="index">
          <template v-slot:actions>
            <button class="button service-action" @click="() => $router.push(`/business/services/${service.id}/edit`)">
              <img src="~assets/img/icons/edit.png" />
            </button>
          </template>

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
  middleware: 'auth-provider',
  async asyncData({ store }) {
    const services = await store.dispatch('businesses/services', 1);

    return { services };
  },
};
</script>
