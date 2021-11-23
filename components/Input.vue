<template>
  <div>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    error: function () {
      return this.$store.state.errors.errors.hasOwnProperty(this.name)
        ? this.$store.state.errors.errors[this.name]
        : null;
    },
  },
  watch: {
    value(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
</style>
