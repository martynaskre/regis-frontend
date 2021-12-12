<template>
  <div class="background">
    <div class="searchBar">
      <select id="Paslaugos" v-model="category">
        <option value=''>Pasirinkite kategoriją</option>
        <option v-for="category in categories"
                @key="category.id"
                :value="category.id"
        >
          {{ category.title }}
        </option>
      </select>
      <input type="text" id="Miestas" placeholder="Raktažodis" v-model="keywords" />
      <button @click="handleSearch">
        <div class="btn-square"></div>
        <div class="btn-triangle"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultCategory: {
      default: '',
    },
    defaultKeywords: {
      default: null,
    },
  },
  data() {
    return {
      category: this.defaultCategory,
      keywords: this.defaultKeywords,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories.list;
    },
  },
  methods: {
    handleSearch() {
      const category = this.categories.find((cat) => cat.id === this.category);

      if (category && this.keywords) {
        this.$router.push(`/category/${category.slug}?query=${this.keywords}`);
      } else {
        this.$notify({
            group: 'error',
            title: 'Klaida',
            text: 'Nurodykite kategoriją ir paieškos raktažodį!',
          }, 2000
        );
      }
    }
  }
}
</script>

<style scoped>
.background {
  display: flex;
  background-color: #6b9ac4;
  height: 550px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.searchBar {
  height: 70px;
  width: 50%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 11;
  justify-content: center;
  padding: 10px;
}
@media (max-width: 1100px) {
  .searchBar {
    height: 200px;
    width: 40%;
    background-color: transparent;
    flex-direction: column;
  }
  #Miestas,
  #Paslaugos {
    margin: 10px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
  }
  button {
    width: 100px;
    height: 40px;
    border-radius: 0px;
    background-color: #4059ad;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    border-radius: 10px;
    text-align: center;
    align-content: center;
    justify-content: center;
  }
}
input {
  z-index: 11;
  margin: 0;
}
input:focus {
  outline: none;
}
#Paslaugos {
  width: 100%;
  border-right: 1px solid #e1e1e1;
}
#Miestas {
  width: 100%;
}
#Miestas:focus,
#Paslaugos:focus {
  outline: 0;
}
@media (min-width: 1100px) {
  button {
    width: 55px;
    aspect-ratio: 1;
    background: #4059ad;
    border-radius: 50%;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    margin: 0;
  }
}
.btn-square {
  width: 21px;
  height: 7px;
  background: #ffffff;
}
.btn-triangle {
  width: 26px;
  aspect-ratio: 1;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 13px solid #ffffff;
}
</style>
