<template>
  <div class="searchBoxBackground">
    <div class="searchBar">
      <select id="Paslaugos" v-model="category">
        <option value="">Pasirinkite kategoriją</option>
        <option
          v-for="(categoryEntry, index) in categories"
          :key="index"
          :value="categoryEntry.id"
        >
          {{ categoryEntry.title }}
        </option>
      </select>
      <input
        type="text"
        id="Miestas"
        placeholder="Raktažodis"
        v-model="keywords"
      />
      <button @click="handleSearch">
        <div class="btn-squaree"></div>
        <div class="btn-trianglee"></div>
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
  mounted() {
    console.log(this.categories);
  },
  methods: {
    handleSearch() {
      const category = this.categories.find((cat) => cat.id === this.category);

      if (category && this.keywords) {
        this.$router.push(`/category/${category.slug}?query=${this.keywords}`);
      } else {
        this.$notify(
          {
            group: 'error',
            title: 'Klaida',
            text: 'Nurodykite kategoriją ir paieškos raktažodį!',
          },
          2000
        );
      }
    },
  },
};
</script>

<style scoped>
.searchBoxBackground {
  display: flex;
  background-color: #6b9ac4;
  height: 450px;
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
  justify-content: space-between;
  background-color: white;
  padding: 10px;
}
button {
  position: relative;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #4059ad;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
}
.btn-squaree {
  position: relative;
  width: 21px;
  height: 6px;
  background: #ffffff;
}
.btn-trianglee {
  width: 30px;
  aspect-ratio: 1;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 15px solid #ffffff;
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
#Miestas,
#Paslaugos {
  margin: 10px;
  border-radius: 10px;
  text-align: center;
}
#Miestas:focus,
#Paslaugos:focus {
  outline: 0;
}
@media (max-width: 1100px) {
  .searchBoxBackground {
    height: 300px;
  }
  .searchBar {
    height: 200px;
    width: 600px;
    background-color: transparent;
    flex-direction: column;
  }
  #Miestas,
  #Paslaugos {
    margin: 10px;
    width: 400px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
  }
  button {
    width: 100px;
    height: 40px;
    background-color: #4059ad;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    border-radius: 10px;
  }
  .btn-squaree {
    position: relative;
    width: 21px;
    height: 6px;
    background: #ffffff;
  }
  .btn-trianglee {
    width: 20px;
    aspect-ratio: 1;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid #ffffff;
  }
}
@media (max-width: 500px) {
  button {
    height: 25px;
    width: 50px;
    background: #4059ad;
    border-radius: 5px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    margin: 0;
  }
  .btn-squaree {
    width: 15px;
    height: 4px;
    background: #ffffff;
  }
  .btn-trianglee {
    width: 10px;
    aspect-ratio: 1;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #ffffff;
  }
  .searchBoxBackground {
    height: 170px;
  }
  #Paslaugos,
  #Miestas {
    width: 180px;
    height: 25px;
    border-radius: 5px;
    font-size: 15px;
  }
  .searchBar {
    height: 150px;
  }
}
</style>
