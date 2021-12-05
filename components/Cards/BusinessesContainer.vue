<template>
  <div class="providersBox">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.providersBox {
  height: 100%;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
