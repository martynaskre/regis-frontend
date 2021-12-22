<template>
  <div>
    <BackRectangles />
    <div class="centerContainer">
      <div class="login-container">
        <h1>Įvertinimas</h1>
        <div class="stars mt-6">
          <div class="star"
               v-for="(maxRating, index) in maxRatings"
               :key="index"
               :class="{ 'star-selected': rating >= index + 1 }"
               @click="setRating(index + 1)"
          />
        </div>
        <div class="mb-12 mt-6 text-left">
          <p class="mb-4">Jūsų nuomonė ir vertinimai labai svarbūs verslui „{{ booking.service.business.title }}”.</p>
          <p>Dėkojame,</p>
          <p>Regis</p>
        </div>
        <button class="btn log" @click="submit">
          Pateikti
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, error, route }) {
    const uuid = route.params.uuid;
    const booking = await store.dispatch('ratings/getBookingByUuid', uuid);

    if (!booking) {
      error({ statusCode: 404, message: 'Puslapis nerastas.' });
    }

    return { booking, uuid };
  },
  data() {
    return {
      maxRatings: 5,
      rating: null,
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
    async submit() {
      const response = await this.$store.dispatch('ratings/saveRating', {
        uuid: this.uuid,
        rating: this.rating,
      });

      if (response) {
        this.$notify(
          {
            group: 'success',
            title: 'Įvertinimas išsaugotas!',
          },
          2000
        );

        this.$router.push('/calendar');
      } else {
        this.$notify(
          {
            group: 'error',
            title: 'Pasirinkite įvertinimą!',
          },
          2000
        );
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/LoginStyling.css';

.log {
  width: 40%;
  height: 9%;
  background: rgba(64, 89, 173, 0.85);
  margin-bottom: calc(10px + 0.5vw);
  color: white;
}
.logInput {
  position: relative;
  text-align: center;
  width: 60%;
}
h1 {
  margin-top: 0;
}

.stars > .star {
  width: 58px;
  height: 50px;
  padding: 0 0.25rem;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.stars > .star:before {
  content: '';
  background: url('~/assets/img/icons/star.png') no-repeat;
  padding: 0 0.25rem;
  position: absolute;
  left: 4px;
  width: 50px;
  height: 50px;
}
.stars:hover > .star:before,
.stars > .star.star-selected:before {
  background: url('~/assets/img/icons/star-filled.png') no-repeat;
}

.stars > .star:hover ~ .star:before {
  background: url('~/assets/img/icons/star.png') no-repeat;
}
</style>
