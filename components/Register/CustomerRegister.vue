<template>
  <div :class="ContainerCustomer">
    <h2>Register as a customer</h2>
    <Input name="firstName" type="text" placeholder="First name" v-model="firstName" />
    <Input name="lastName" type="text" placeholder="Last name" v-model="lastName" />
    <Input name="email" type="email" placeholder="Email" v-model="email" />
    <Input name="phoneNumber" type="text" placeholder="Phone number" v-model="phoneNumber" />
    <Input name="password" type="password" placeholder="Password" v-model="password" />
    <Input name="passwordConfirmation" type="password" placeholder="Password confirmation" v-model="passwordConfirmation" />
    <button class="btnReg" @click="submit">
      Signup
    </button>
  </div>
</template>

<script>
export default{
  name: 'CustomerRegister',
  props:{
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
  computed:{
    ContainerCustomer(){
      return {
        containerRegister: this.customer,
        Customer: this.customer,
        hide: !this.customer,
      }
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
    }
  },
}
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
