<template>
  <div class="service">
    <div class="actions">
      <slot name="actions" />
    </div>
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
