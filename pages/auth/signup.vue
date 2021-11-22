<template>
    <div>
        <BackRectangles />
        <RegisterCustomerRegister :customer=sliderPosition />
        <RegisterProviderRegister :provider=sliderPosition />
        <RegisterSlider  :slider=sliderPosition @ChangeBool="ChangeB($event)" />
    </div>
</template>

<script>
export default {
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
@import '~/assets/css/LoginStyling.css';
@import '~/assets/css/RegisterStyling.css';
</style>
