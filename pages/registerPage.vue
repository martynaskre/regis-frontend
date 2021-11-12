<template>
    <div >
        <backRectangles />
        <CustomerRegister :customer=sliderPosition />
        <ProviderRegister :provider=sliderPosition />
        <RegisterSlider  :slider=sliderPosition @ChangeBool="ChangeB($event)" />
    </div>
</template>

<script>
import backRectangles from '../components/backRectangles.vue';
import CustomerRegister from '../components/Register/CustomerRegister.vue';
import ProviderRegister from '../components/Register/ProviderRegister.vue';
import RegisterSlider from '../components/Register/RegisterSlider.vue';
export default {
    components:{
        backRectangles,
        CustomerRegister,
        ProviderRegister,
        RegisterSlider,
    },
    data(){
        return{
            sliderPosition: true,
        }
    },
    methods:{
        ChangeB(sliderPosition)
        {
            this.sliderPosition=!sliderPosition;
        },
    }
}
</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';
@import '../components/css-files/RegisterStyling.css';
</style>