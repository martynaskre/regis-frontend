<template>
  <div :class="ContainerProvider">
    <h2>Register as a service <br/> provider</h2>
    <Input name="firstName" type="text" placeholder="First name" v-model="firstName" />
    <Input name="lastName" type="text" placeholder="Last name" v-model="lastName" />
    <Input name="password" type="password" placeholder="Password" v-model="password" />
    <Input name="passwordConfirmation" type="password" placeholder="Password confirmation" v-model="passwordConfirmation" />
    <h3>Legal entity type</h3>
    <div class="checkBox-positioning">
      <input type="radio" name="isLegalEntity" value="0" class="checkBox" v-model="isLegalEntity">
      <h4>Individual</h4>
      <input type="radio" name="isLegalEntity" value="1" class="checkBox" v-model="isLegalEntity">
      <h4>Juridical Person</h4>
    </div>
    <Input name="email" type="email" placeholder="Email" v-model="email" />
    <Input name="phoneNumber" type="text" placeholder="Phone number" v-model="phoneNumber" />
    <Input v-if="isLegalEntity === '1'" name="companyName" type="text" placeholder="Company name" v-model="companyName" />
    <Input name="code" type="text" :placeholder="codePlaceholder" v-model="code" />
    <Input name="vatCode" type="text" placeholder="VAT code" v-model="vatCode" />
    <button class="btnReg" @click="submit">
      Signup
    </button>
  </div>
</template>

<script>
export default{
  name: 'ProviderRegister',
  props:{
    provider: Boolean,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      password: null,
      passwordConfirmation: null,
      isLegalEntity: '0',
      email: null,
      phoneNumber: null,
      companyName: null,
      code: null,
      vatCode: null,
    };
  },
  computed: {
    ContainerProvider() {
      return {
        containerRegister: !this.provider,
        Provider: !this.provider,
        hide: this.provider,
      }
    },
    codePlaceholder() {
      return (this.isLegalEntity === '0')
        ? 'Code'
        : 'Company code';
    },
  },
  methods: {
    async submit() {
      await this.$store.dispatch('providers/signup', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
        isLegalEntity: this.isLegalEntity,
        phoneNumber: this.phoneNumber,
        companyName: this.companyName,
        code: this.code,
        vatCode: this.vatCode,
      });
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
