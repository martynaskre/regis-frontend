<template>
    <div :class="ContainerProvider">
            <h2>Register as a service <br/> provider</h2>
            <input id="NameP" type="text" placeholder="Name">
            <input id="SurnameP" type="text" placeholder="Surname">
            <input id="PasswordP" type="text" placeholder="Password">
            <h3>Legal entity type</h3>
            <div class="checkBox-positioning">
                <input type="radio" name="isLegalEntity" value="0" class="checkBox">
                <h4>Individual</h4>
                <input type="radio" name="isLegalEntity" value="1" class="checkBox">
                <h4>Juridical Person</h4>
            </div>
            <input id="EmailP" type="text" placeholder="Email">
            <input id="PhoneNumberP" type="text" placeholder="Phone Number">
            <input id="CompanyNameP" type="text" placeholder="Company name">
            <input id="CategoryP" type="text" placeholder="Category">
            <input id="CompanyCodeP" type="text" placeholder="Company code">
            <input id="VATcodeP" type="text" placeholder="VAT code">
            <nuxt-link to='/auth' class="btnReg">Register</nuxt-link>
    </div>
</template>

<script>
export default{
    name: 'ProviderRegister',
    props:{
        provider: Boolean,
    },
    computed:{
            ContainerProvider(){
            return{
                containerRegister: !this.provider,
                Provider: !this.provider,
                hide: this.provider,
            }
        },
    },
}
</script>

<style scoped>
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
