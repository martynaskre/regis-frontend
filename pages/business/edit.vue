<template>
  <div>
    <Navbar />
    <div class="container container-sm text-center">
      <h1 class="name">Verslo redagavimas</h1>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input
            name="title"
            type="text"
            label="Pavadinimas:"
            v-model="title"
            :businessInput="true"
          />
          <Input
            name="logo"
            type="file"
            label="Logotipas:"
            @change="handleLogo"
            :businessInput="true"
          />
        </div>
        <div>
          <Input
            name="category"
            type="select"
            label="Kategorija:"
            placeholder="Pasirinkite kategoriją"
            :select-options="categories"
            v-model="categoryId"
            :businessInput="true"
          />
          <Input
            name="cover"
            type="file"
            label="Viršelis:"
            @change="handleCover"
            :businessInput="true"
          />
        </div>
      </div>
      <div class="container container-sm">
        <Input
          name="addressCountry"
          type="text"
          label="Valstybė:"
          v-model="addressCountry"
          :businessInput="true"
        />
      </div>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input
            name="addressCity"
            type="text"
            label="Miestas:"
            v-model="addressCity"
            :businessInput="true"
          />
          <Input
            name="addressHouseNumber"
            type="text"
            label="Namo nr.:"
            v-model="addressHouseNumber"
            :businessInput="true"
          />
        </div>
        <div>
          <Input
            name="addressStreet"
            type="text"
            label="Adresas:"
            v-model="addressStreet"
            :businessInput="true"
          />
          <Input
            name="addressPostCode"
            type="text"
            label="Pašto kodas:"
            v-model="addressPostCode"
            :businessInput="true"
          />
        </div>
      </div>
      <div class="container container-sm">
        <Input
          name="shortDescription"
          type="textarea"
          label="Trumpas aprašymas:"
          v-model="shortDescription"
          :businessInput="true"
        />
      </div>
      <div class="container container-sm">
        <Input
          name="longDescription"
          type="textarea"
          label="Ilgas aprašymas:"
          v-model="longDescription"
          :businessInput="true"
        />
      </div>
      <button
        class="button button-large button-rounded button-success"
        @click="submit"
      >
        Išsaugoti verslą
      </button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ redirect, store }) {
    const business = await store.dispatch('providers/getBusiness');

    if (!business) {
      redirect('/business');
    }

    const categories = {};

    const databaseCategories = await store.dispatch('categories/fetchCategories');

    for (const category of databaseCategories) {
      categories[category.id] = category.title;
    }

    return {
      business,
      title: business.title,
      categoryId: business.category.id,
      addressCountry: business.addressCountry,
      addressCity: business.addressCity,
      addressStreet: business.addressStreet,
      addressHouseNumber: business.addressHouseNumber,
      addressPostCode: business.addressPostCode,
      shortDescription: business.shortDescription,
      longDescription: business.longDescription,
      categories,
    };
  },
  data() {
    return {
      categories: {},
      logo: null,
      cover: null,
    };
  },
  methods: {
    handleLogo(e) {
      this.logo = (e.target.files || e.dataTransfer.files)[0];
    },
    handleCover(e) {
      this.cover = (e.target.files || e.dataTransfer.files)[0];
    },
    async submit() {
      let response = await this.$store.dispatch(
        'businesses/update',
        {
          id: this.business.id,
          data: this.$convertToFormData(
            this.$unwrap(
              this.$data,
              'title',
              'categoryId',
              'logo',
              'cover',
              'addressCountry',
              'addressCity',
              'addressStreet',
              'addressHouseNumber',
              'addressPostCode',
              'shortDescription',
              'longDescription'
            )
          )
        }
      );

      if (response) {
        this.$notify(
          {
            group: 'success',
            title: 'Verslas atnaujintas!',
          },
          2000
        );

        await this.$router.push('/business');
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
  }
  label {
    position: relative;
    right: 38%;
    text-align: left;
  }
  .name {
    font-size: 2rem;
    margin-top: 2rem;
  }
}
</style>
