<template>
  <div class="form-element"
       :class="{ 'has-error': error }">
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="content"
      @input="handleInput"
      class="form-input"
    />
    <div class="form-element-error" v-if="error">
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
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    }
  },
  data() {
    return {
      content: this.value,
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
      this.content = value;
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  },
};
</script>

<style lang="scss">
.form-element {
  .form-input {
    text-align: center;
    font-size: calc(12px + 0.8vw);
    margin: 0 0 calc(10px + 0.5vw);
  }

  .form-element-error {
    text-align: left;
    color: #ff5714;
  }

  &.has-error {
    margin-bottom: 1rem;

    .form-input {
      margin-bottom: 0;
    }
  }
}
</style>
