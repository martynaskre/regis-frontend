<template>
    <div class="loginBackground">
        <backRectangles />
         <div class="RegisterSlider"> 
             <h1>Regis</h1>
        </div>
        <div class="containerRegister">
            <h2>Register as a customer</h2>
            <input id="vardas" type="text" placeholder="Name"><br>
            <input id="slaptazodis" type="text" placeholder="Surname"><br>
            <input id="slaptazodis" type="text" placeholder="Password"><br>
            <input id="slaptazodis" type="text" placeholder="Email"><br>
            <input id="slaptazodis" type="text" placeholder="Phone Number"><br>
            <nuxt-link to='/' class="btn log">Register</nuxt-link>
            

        </div>
    </div>
</template>

<script>
import backRectangles from '../components/backRectangles.vue';


export default {
    components:{
        backRectangles,
        
    }
}
</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';


.log{
    width: 60%;
    height: 7%;
    background: rgba(64, 89, 173, 0.65);
    color: white;
    margin-top: calc(10px + 0.5vw);
}

input{
    position: relative;
    text-align: center;
    font-size: calc(12px + 0.8vw);
    width: 66%;
    margin-bottom: calc(10px + 0.5vw);
}
h2
{
    margin-bottom: calc(30px + 0.5vw);
}



</style>