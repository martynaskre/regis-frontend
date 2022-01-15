<template>
  <div class="stars">
    <div v-for="(maxRating, index) in maxRatings"
         :key="index"
         :class="{ 'selected': rating >= index + 1 }"
         class="star" />
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      maxRatings: 5,
    };
  },
};
</script>

<style scoped>
.stars {
  position: absolute;
  bottom: 10px;
  right: 20px;
}

.stars > .star {
  width: 26px;
  height: 26px;
  margin: 0 0.1rem;
  display: inline-block;
  position: relative;
  background: url('~/assets/img/icons/star.png') no-repeat;
  background-size: contain;
}

.stars > .star.selected {
  background: url('~/assets/img/icons/star-filled.png') no-repeat;
  background-size: contain;
}
</style>
