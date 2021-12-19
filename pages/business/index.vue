<template>
  <div>
    <Navbar />
    <CardsBusinessesContainer>
      <CardsBusiness :phoneNumber="auth.user.phoneNumber"
                     :logo="business.logo"
                     :cover="business.cover"
                     @click="() => $router.push(`/business/${business.slug}/show`)"
      >
        {{ business.title }}

        <template v-slot:address>
          {{ business.addressStreet }} {{ business.addressHouseNumber }}, {{ business.addressCity }}, {{ business.addressCountry }} {{ business.addressPostCode }}
        </template>

        <template v-slot:description>
          {{ business.shortDescription }}
        </template>
      </CardsBusiness>
    </CardsBusinessesContainer>
    <div class="container container-sm grid-rows grid-of-3">
      <button
        class="button button-warning text"
        @click="() => $router.push(`/business/edit`)"
      >
        Redaguoti bazinę informaciją
      </button>
      <button
        class="button button-warning text"
        @click="() => $router.push(`/business/services`)"
      >
        Redaguoti paslaugas
      </button>
      <button
        class="button button-warning text"
        @click="() => $router.push(`/business/schedule`)"
      >
        Redaguoti darbo laiką
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  middleware: 'auth-provider',
  data() {
    return {
      business: null,
    };
  },
  async asyncData({ redirect, store }) {
    const business = await store.dispatch('providers/getBusiness');

    if (!business) {
      redirect('/business/create');
    }

    return { business };
  },
  computed: {
    ...mapState(['auth']),
  },
};
</script>

<style lang="scss">
@media (max-width: 1100px) {
  button {
    height: 50px;
    font-size: calc(13px + 0.1vw);
    padding: 0;
    margin: 1rem;
  }
}
@media (max-width: 500px) {
  .text {
    font-size: 0.8rem !important;
    padding: 0;
  }
}
</style>
