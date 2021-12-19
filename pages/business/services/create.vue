<template>
  <div>
    <Navbar />
    <div class="container container-sm text-center">
      <h1>Paslaugos kūrimas</h1>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input name="title"
                 type="text"
                 label="Pavadinimas:"
                 v-model="title"
                 :businessInput="true" />
          <Input name="minPrice"
                 type="number"
                 label="Min. kaina:"
                 v-model="minPrice"
                 :businessInput="true" />
        </div>
        <div>
          <Input name="duration"
                 type="number"
                 label="Trukmė:"
                 v-model="duration"
                 :businessInput="true" />
          <Input name="maxPrice"
                 type="number"
                 label="Maks. kaina:"
                 v-model="maxPrice"
                 :businessInput="true" />
        </div>
      </div>
      <div class="container container-sm">
        <Input name="description"
               type="textarea"
               label="Aprašymas:"
               v-model="description"
               :businessInput="true" />
      </div>
      <button class="button button-large button-rounded button-success" @click="submit">
        Sukurti paslaugą
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth-provider',
  async asyncData({ redirect, store }) {
    const business = await store.dispatch('providers/getBusiness');

    if (!business) {
      redirect('/business');
    }

    return { business };
  },
  data() {
    return {
      title: null,
      minPrice: null,
      maxPrice: null,
      duration: null,
      description: null,
    };
  },
  methods: {
    async submit() {
      const response = await this.$store.dispatch(
        'services/create',
        {
          businessId: this.business.id,
          ...this.$unwrap(
            this.$data,
            'title',
            'minPrice',
            'maxPrice',
            'duration',
            'description',
          ),
        },
      );

      if (response) {
        this.$notify(
          {
            group: 'success',
            title: 'Paslauga sukurta!',
          },
          2000
        );

        this.$router.push('/business/services');
      }
    },
  },
};
</script>
