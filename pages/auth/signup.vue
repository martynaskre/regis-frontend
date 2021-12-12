<template>
  <div>
    <BackRectangles />
    <RegisterCustomerRegister :customer="sliderPosition" />
    <RegisterProviderRegister :provider="sliderPosition" />
    <RegisterSlider :slider="sliderPosition" @ChangeBool="ChangeB($event)" />
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      sliderPosition: true,
    };
  },
  methods: {
    ChangeB(sliderPosition) {
      this.sliderPosition = !sliderPosition;
    },
  },
};
</script>
