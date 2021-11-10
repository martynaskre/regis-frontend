<template>
    <div >
        <backRectangles />
        <div :class="ContainerCustomer">
            <h2>Register as a customer</h2>
            <input id="NameC" type="text" placeholder="Name">
            <input id="SurnameC" type="text" placeholder="Surname">
            <input id="PasswordC" type="text" placeholder="Password">
            <input id="EmailC" type="text" placeholder="Email">
            <input id="PhoneNumberC" type="text" placeholder="Phone Number"> 
            <nuxt-link to='/' class="btnReg">Register</nuxt-link>
        </div>
        <div :class="ContainerProvider">
            <h2>Register as a service <br/> provider</h2>
            <input id="NameP" type="text" placeholder="Name">
            <input id="SurnameP" type="text" placeholder="Surname">
            <input id="PasswordP" type="text" placeholder="Password">
            <h3>Legal entity type</h3>
            <div class="checkBox-positioning">
                <input type="checkbox" class="checkBox">
                <h4>Individual</h4>
                <input type="checkbox" class="checkBox">
                <h4>Juridical Person</h4>
            </div>
            <input id="EmailP" type="text" placeholder="Email">
            <input id="PhoneNumberP" type="text" placeholder="Phone Number">
            <input id="CompanyNameP" type="text" placeholder="Company name">
            <input id="CategoryP" type="text" placeholder="Category">
            <input id="CompanyCodeP" type="text" placeholder="Company code">
            <input id="VATcodeP" type="text" placeholder="VAT code">
            <nuxt-link to='/' class="btnReg">Register</nuxt-link>
        </div>
        <div class="RegisterSlider" :class="SliderStyle">
            <button class="sliderBtn btn-left" :class="SliderBtnStyle" @click="sliderPosition=!sliderPosition">
                <div class="triangle triangle-right" :class="SliderBtnTriangle"></div>
            </button>
            <h1>REGIS</h1>
        </div>
    </div>
</template>

<script>
import backRectangles from '../components/backRectangles.vue';
export default {
    components:{
        backRectangles,
    },
    data(){
        return{
            sliderPosition: true,
        }
    },
    computed:{
        SliderStyle(){
            return{
                SliderRight: this.sliderPosition,
                SliderLeft: !this.sliderPosition,

            }
        },
        SliderBtnStyle(){
            return{
                btnRight: !this.sliderPosition,
                btnLeft: this.sliderPosition,
            }
        },
        SliderBtnTriangle(){
            return{
                triangleRight: this.sliderPosition,
                triangleLeft: !this.sliderPosition,
            }
        },
        ContainerCustomer(){
            return{
                containerRegister: this.sliderPosition,
                Customer: this.sliderPosition,
                hide: !this.sliderPosition,
            }
        },
        ContainerProvider(){
            return{
                containerRegister: !this.sliderPosition,
                Provider: !this.sliderPosition,
                hide: this.sliderPosition,
            }
        }
    }
}
</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';
@import '../components/css-files/RegisterStyling.css';
</style>