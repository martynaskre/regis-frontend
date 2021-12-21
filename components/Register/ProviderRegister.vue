<template>
  <div :class="ContainerProvider">
    <h2>Registruotis kaip paslaugos tiekėjas</h2>
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
    <h3>Asmens tipas:</h3>
    <div class="checkBox-positioning">
      <input
        type="radio"
        name="isLegalEntity"
        value="0"
        class="checkBox"
        v-model="isLegalEntity"
      />
      <h4>Fizinis</h4>
      <input
        type="radio"
        name="isLegalEntity"
        value="1"
        class="checkBox"
        v-model="isLegalEntity"
      />
      <h4>Juridinis</h4>
    </div>
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
      v-if="isLegalEntity === '1'"
      name="companyName"
      type="text"
      placeholder="Kompanijos pavadinimas"
      v-model="companyName"
    />
    <Input
      class="logInput"
      name="code"
      type="text"
      :placeholder="codePlaceholder"
      v-model="code"
    />
    <Input
      class="logInput"
      name="vatCode"
      type="text"
      placeholder="PVM kodas"
      v-model="vatCode"
    />
    <button class="btnReg" @click="submit">Registruotis</button>
  </div>
</template>

<script>
export default {
  name: 'ProviderRegister',
  props: {
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
      };
    },
    codePlaceholder() {
      return this.isLegalEntity === '0' ? 'Kodas' : 'Kompanijos kodas';
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
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
