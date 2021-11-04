<template>
    <div>
        <backRectangles />
        <div class="container">
            <h1>REGIS</h1>
            <nuxt-link to="/LoginPage" class="btn">Klientas</nuxt-link>
            <nuxt-link to="/LoginPage" class="btn">Profesionalas</nuxt-link>
            <nuxt-link to='/registerPage' class="btn reg">Registracija</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import backRectangles from '../components/backRectangles.vue';

export default {
    components:{
        backRectangles,
    }
}

</script>

<style scoped>
@import '../components/css-files/LoginStyling.css';
.btn{
    width: 60%;
    height: 12%;
    background: rgba(64, 89, 173, 0.65);
    color: white;
    margin: calc(10px + 0.8vw);
}
.reg{
    position: absolute;
    width: 20%;
    left: 77%;
    bottom: -8%;
    background: transparent;
    color: #555555;
    font-family: Montserrat;
    text-decoration-line: underline;
}
</style>