<template>
  <div>
    <Navbar />
    <div class="container container-sm text-center">
      <h1 class="name">Paslaugos redagavimas</h1>
      <div class="container container-sm">
        <Input
          name="title"
          type="text"
          label="Pavadinimas:"
          v-model="title"
          :businessInput="true"
        />
      </div>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input
            name="minPrice"
            type="number"
            label="Min. kaina:"
            v-model="minPrice"
            :businessInput="true"
          />
        </div>
        <div>
          <Input
            name="maxPrice"
            type="number"
            label="Maks. kaina:"
            v-model="maxPrice"
            :businessInput="true"
          />
        </div>
      </div>
      <div class="container container-sm">
        <Input
          name="description"
          type="textarea"
          label="Aprašymas:"
          v-model="description"
          :businessInput="true"
        />
      </div>
      <button
        class="button button-large button-rounded button-success"
        @click="submit"
      >
        Išsaugoti paslaugą
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-provider',
  async asyncData({ redirect, store, route }) {
    const service = await store.dispatch('services/get', route.params.id);

    if (!service) {
      redirect('/business/services');
    }

    return {
      service,
      title: service.title,
      duration: service.duration,
      minPrice: service.minPrice,
      maxPrice: service.maxPrice,
      description: service.description,
    };
  },
  methods: {
    async submit() {
      const response = await this.$store.dispatch(
        'services/update',
        {
          id: this.service.id,
          ...this.$unwrap(
            this.$data,
            'title',
            'minPrice',
            'maxPrice',
            'duration',
            'description',
          ),
        },
      )

      if (response) {
        this.$notify(
          {
            group: 'success',
            title: 'Paslauga atnaujinta!',
          },
          2000
        );

        this.$router.push('/business/services');
      }
    },
  },
};
</script>

<style lang="scss">
@media (max-width: 1100px) {
  .form-inner {
    display: flex;
    flex-direction: column;
    label {
      position: relative;
      right: 38%;
      text-align: left;
    }
  }
  .name {
    font-size: 2rem;
    margin-top: 2rem;
  }
}
</style>
