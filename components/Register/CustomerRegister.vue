<template>
  <div :class="ContainerCustomer">
    <h2>Registruotis kaip klientui</h2>
    <Input
      class="logInput"
      name="firstName"
      type="text"
      placeholder="Vardas"
      v-model="firstName"
    />
    <Input
      class="logInput"
      name="lastName"
      type="text"
      placeholder="Pavardė"
      v-model="lastName"
    />
    <Input
      class="logInput"
      name="email"
      type="email"
      placeholder="El. paštas"
      v-model="email"
    />
    <Input
      class="logInput"
      name="phoneNumber"
      type="text"
      placeholder="Telefono nr."
      v-model="phoneNumber"
    />
    <Input
      class="logInput"
      name="password"
      type="password"
      placeholder="Slaptažodis"
      v-model="password"
    />
    <Input
      class="logInput"
      name="passwordConfirmation"
      type="password"
      placeholder="Pakartotas slaptažodis"
      v-model="passwordConfirmation"
    />
    <button class="btnReg" @click="submit">Registruotis</button>
  </div>
</template>

<script>
export default {
  name: 'CustomerRegister',
  props: {
    customer: Boolean,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      password: null,
      passwordConfirmation: null,
    };
  },
  computed: {
    ContainerCustomer() {
      return {
        containerRegister: this.customer,
        Customer: this.customer,
        hide: !this.customer,
      };
    },
  },
  methods: {
    async submit() {
      await this.$store.dispatch('clients/signup', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      });
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
