<template>
  <div>
    <Navbar />
    <div class="container container-sm text-center">
      <h1>Verslo kūrimas</h1>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input name="title"
                 type="text"
                 label="Pavadinimas:"
                 v-model="title"
                 :businessInput="true" />
          <Input name="logo"
                 type="file"
                 label="Logotipas:"
                 @change="handleLogo"
                 :businessInput="true" />
        </div>
        <div>
          <Input name="category"
                 type="select"
                 label="Kategorija:"
                 placeholder="Pasirinkite kategoriją"
                 :options="['test']"
                 v-model="category"
                 :businessInput="true" />
          <Input name="cover"
                 type="file"
                 label="Viršelis:"
                 @change="handleCover"
                 :businessInput="true" />
        </div>
      </div>
      <div class="container container-sm">
        <Input name="addressCountry"
               type="text"
               label="Valstybė:"
               v-model="addressCountry"
               :businessInput="true" />
      </div>
      <div class="my-10 grid-rows grid-of-2">
        <div>
          <Input name="addressCity"
                 type="text"
                 label="Miestas:"
                 v-model="addressCity"
                 :businessInput="true" />
          <Input name="addressHouseNumber"
                 type="text"
                 label="Namo nr.:"
                 v-model="addressHouseNumber"
                 :businessInput="true" />
        </div>
        <div>
          <Input name="addressStreet"
                 type="text"
                 label="Adresas:"
                 v-model="addressStreet"
                 :businessInput="true" />
          <Input name="addressPostCode"
                 type="text"
                 label="Pašto kodas:"
                 v-model="addressPostCode"
                 :businessInput="true" />
        </div>
      </div>
      <div class="container container-sm">
        <Input name="shortDescription"
               type="textarea"
               label="Trumpas aprašymas:"
               v-model="shortDescription"
               :businessInput="true" />
      </div>
      <div class="container container-sm">
        <Input name="longDescription"
               type="textarea"
               label="Ilgas aprašymas:"
               v-model="longDescription"
               :businessInput="true" />
      </div>
      <button class="button button-large button-rounded button-success" @click="submit">
        Sukurti verslą
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      category: null,
      logo: null,
      cover: null,
      addressCountry: null,
      addressCity: null,
      addressStreet: null,
      addressHouseNumber: null,
      addressPostCode: null,
      shortDescription: null,
      longDescription: null,
    };
  },
  methods: {
    handleLogo(e) {
      this.logo = (e.target.files || e.dataTransfer.files)[0];
    },
    handleCover(e) {
      this.cover = (e.target.files || e.dataTransfer.files)[0];
    },
    submit() {
      // TODO
    }
  },
}
</script>
