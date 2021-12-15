<template>
  <div>
    <Navbar />
    <div class="container container-sm text-center">
      <h1>Paslaugos kūrimas</h1>
      <div class="container container-sm">
        <Input name="title"
               type="text"
               label="Pavadinimas:"
               v-model="title"
               :businessInput="true" />
      </div>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input name="minPrice"
                 type="number"
                 label="Min. kaina:"
                 v-model="minPrice"
                 :businessInput="true" />
        </div>
        <div>
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
  data() {
    return {
      title: null,
      minPrice: null,
      maxPrice: null,
      description: null,
    };
  },
  methods: {
    submit() {
      this.$router.push('/business/verslas-nuo-nulio/services');
    },
  },
};
</script>
