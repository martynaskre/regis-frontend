<template>
    <div >
        <backRectangles />
        <!-- <div class="containerRegister">
            <h1>Register as a customer</h1>
            <input id="vardas" type="text" placeholder="Name"><br>
            <input id="slaptazodis" type="text" placeholder="Surname"><br>
            <input id="slaptazodis" type="text" placeholder="Password"><br>
            <input id="slaptazodis" type="text" placeholder="Email"><br>
            <input id="slaptazodis" type="text" placeholder="Phone Number"><br>
            <nuxt-link to='/' class="btn log">Register</nuxt-link>
        </div> -->
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
            sliderPosition: false
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
        }
    }
}
</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';
.containerRegister{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc((100% - calc(150px + 23vw))/2);
    top: calc((100% - calc(350px + 12vw))/2);
    width: calc(150px + 23vw);
    height: calc(350px + 12vw);
    border-radius: 10px;
    background:rgba(250,250,250,0.7);
    z-index: 20;
}
.RegisterSlider{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px;
    background-color: #EFF2F1;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
}
.SliderLeft{
    right: 60%;
}
.SliderRight{
    left: 60%;   
}
.sliderBtn{
    position: absolute;
    top: 1%;
    border-radius: 50%;
    z-index: 21;
    width: 3vw;
    aspect-ratio: 1;
    background: #4059AD;
    cursor: pointer;
}
.btnRight{
    right: 1%;
}
.btnLeft{
    left: 1%;
}
.triangle{
    position: absolute;
    width: 2vw;
    aspect-ratio: 1;
    z-index: 22;
    border-top: 1vw solid transparent;
    border-bottom: 1vw solid transparent;
}
.triangleRight{
    left: 5%;
    top: 17%;
    border-right: 1.7vw solid #EFF2F1;
}
.triangleLeft{
    right: 5%;
    top: 17%;
    border-left: 1.7vw solid #EFF2F1;
}
h1{
    font-weight: bold;
    font-size: calc(25px + 8vw);
    top: 40%;
}
input{
    margin-bottom: calc(5px + 0.3vw);
}
</style>