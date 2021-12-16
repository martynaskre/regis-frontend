<template>
  <div class="providerContainer">
    <div class="providerTextBox">
      <a class="providerPhone" :href="`phone:${phoneNumber}`">
        <img :src="require('~/assets/img/icons/phone.png')" />
      </a>
      <h1 class="providerHeading cursor-pointer" @click="handleClick">
        <slot/>
      </h1>
      <p class="providerAddress">
        <slot name="address"/>
      </p>
      <p class="providerDescription">
        <slot name="description"/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
.providerContainer {
  width: 85%;
  height: 300px;
  background: grey;
  border-radius: 20px;
  margin-top: 60px;
  position: relative;
}
.providerTextBox {
  position: absolute;
  height: 250px;
  margin-top: 25px;
  width: 70%;
  background-color: white;
  right: 2%;
  border-radius: 20px;
  padding: 20px 40px;
}
.providerHeading {
  font-size: 37px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.providerPhone {
  width: 32px;
  height: 32px;
  background-color: #C4C4C4;
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 100px;
  text-align: center;
  padding-top: 5px;
  padding-left: 4px;
}
.providerAddress {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  position: relative;
  padding-left: 16px;
  margin-bottom: 10px;
}
.providerAddress:before {
  content: '';
  background: url('~/assets/img/icons/location.png');
  width: 11px;
  height: 11px;
  display: block;
  position: absolute;
  top: calc(50% - 1px);
  transform: translateY(-50%);
  left: 0;
}
.providerDescription {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.selectContainer {
  margin: 20px;
}
.servicesSelect {
  background-color: #C4C4C4;
  width: 100%;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding: 10px;
  border-radius: 5px;
}
.servicesSelect:focus {
  outline: 0;
}
</style>
