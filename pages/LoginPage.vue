<template>
    <div>
        <backRectangles />
        <div class="container">
            <h1>REGIS</h1>
            <input id="vardas" type="text" placeholder="Prisijungimo vardas"><br>
            <input id="slaptazodis" type="text" placeholder="Slaptažodis"><br>
            <nuxt-link to='/' class="btn log">Prisijungti</nuxt-link>
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

.log{
    width: 40%;
    height: 8%;
    background: rgba(64, 89, 173, 0.65);
    margin-bottom: calc(10px + 0.5vw);
    color: white;
}

input{
    position: relative;
    text-align: center;
    font-size: calc(12px + 0.8vw);
    width: 66%;
    margin-bottom: calc(10px + 0.5vw);
}
</style>