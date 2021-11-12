<template>
    <div :class="ContainerCustomer">
            <h2>Register as a customer</h2>
            <input id="NameC" type="text" placeholder="Name">
            <input id="SurnameC" type="text" placeholder="Surname">
            <input id="PasswordC" type="text" placeholder="Password">
            <input id="EmailC" type="text" placeholder="Email">
            <input id="PhoneNumberC" type="text" placeholder="Phone Number"> 
            <nuxt-link to='/' class="btnReg">Register</nuxt-link>
        </div>
</template>

<script>
export default{
    name: 'CustomerRegister',
    props:{
        customer: Boolean,
    },
    computed:{
            ContainerCustomer(){
            return{
                containerRegister: this.customer,
                Customer: this.customer,
                hide: !this.customer,
            }
        },
    },
}
</script>

<style scoped>
@import '../css-files/LoginStyling.css';
@import '../css-files/RegisterStyling.css';
</style>