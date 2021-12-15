<template>
  <div class="service">
    <slot name="actions" />
    <h5 class="service-title">
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
