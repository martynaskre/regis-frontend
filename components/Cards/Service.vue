<template>
  <div class="service">
    <slot name="actions" />
    <h5 class="service-title cursor-pointer" @click="handleClick">
      <slot />
    </h5>
    <p class="service-description">
      <slot name="description" />
    </p>
    <p class="service-price">
      <slot name="price" />
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
