<template>
  <div class="form-element" :class="classes">
    <div class="form-inner">
      <template v-if="label">
        <label :for="name">{{ label }}</label>
      </template>
      <textarea v-if="type === 'textarea'"
                :id="name"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                :value="content"
                @input="handleInput"
                class="form-input"
      />
      <select v-else-if="type === 'select'"
              :id="name"
              :name="name"
              :disabled="disabled"
              :value="content"
              @input="handleInput"
              class="form-input"
      >
        <option value="">{{ placeholder }}</option>
        <option v-for="(option, index) in selectOptions"
                :key="index"
                :value="index">
          {{ option }}
        </option>
      </select>
      <input
        v-else
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="content"
        @input="handleInput"
        class="form-input"
      />
    </div>
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
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
    businessInput: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    selectOptions: {
      type: Object,
      default: () => {},
    },
    scheduleInput: {
      type: Boolean,
      default: false,
    },
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
    classes() {
      const classes = [];

      if (this.businessInput) {
        classes.push('business-form-element')
      }

      if (this.error) {
        classes.push('has-error')
      }

      if (this.scheduleInput) {
        classes.push('schedule-form-element')
      }

      return classes.join(' ');
    },
  },
  watch: {
    value(value) {
      this.content = value;
    },
    selectOptions(value) {
      console.log(value);
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e);
    },
  },
};
</script>
