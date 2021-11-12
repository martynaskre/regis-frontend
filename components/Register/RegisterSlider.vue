<template>
    <div class="RegisterSlider" :class="SliderStyle">
            <button class="sliderBtn btn-left" :class="SliderBtnStyle" @click='onClick'>
                <div class="triangle triangle-right" :class="SliderBtnTriangle"></div>
            </button>
            <h1>REGIS</h1>
    </div>
</template>

<script>
export default{
    props:{
        slider: Boolean,
    },
    computed:{
        SliderStyle(){
            return{
                SliderRight: this.slider,
                SliderLeft: !this.slider,
            }
        },
        SliderBtnStyle(){
            return{
                btnRight: !this.slider,
                btnLeft: this.slider,
            }
        },
        SliderBtnTriangle(){
            return{
                triangleRight: this.slider,
                triangleLeft: !this.slider,
            }
        },   
    },
    methods:{
        onClick(){
            this.$emit('ChangeBool', this.slider)
        }
    }
}
</script>

<style scoped>
@import '../css-files/LoginStyling.css';
@import '../css-files/RegisterStyling.css';
</style>