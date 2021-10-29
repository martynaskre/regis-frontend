<template>
<body>
    <div class="container">
        <h1>REGIS</h1>
        <input id="vardas" type="text" placeholder="Prisijungimo vardas"><br>
        <input id="slaptazodis" type="text" placeholder="Slaptažodis"><br>
        <button class="btn log">Prisijungti</button><br>
        <button class="btn reg">Registruotis</button>
    </div>
    <div class="rectangle1 border"></div>
    <div class="rectangle2 border"></div>
    <div class="rectangle3 border"></div>
    <div class="rectangle4 border"></div>
    <div class="rectangle5 border"></div>
    <div class="rectangle6 border"></div>
    <div class="rectangle7 border"></div>
    <div class="rectangle8 border"></div>
    <div class="rectangle9 border"></div>
    <div class="rectangle10 border"></div>
    <div class="rectangle11 border"></div>
    <div class="rectangle12 border"></div>
    <div class="rectangle13 border"></div>
    <div class="rectangle14 border"></div>
    <div class="rectangle15 border"></div>
    <div class="rectangle16 border"></div>
    <div class="rectangle17 border"></div>
    <div class="rectangle18 border"></div>
</body>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { AppModule } from '~/store';

@Component
export default class Index extends Vue {
  mounted() {
    AppModule.testAction();
  }
}
</script>

<style scoped>
body{
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: 0px;
    background-color: #6B9AC4;
    background-size: 100%;
    display: grid;
    grid-template-columns: repeat(100, 1%);
    grid-template-rows: repeat(100, 1%);
}
.container{
    position: absolute;
    left: calc((100% - calc(400px + 23vw))/2);
    top: calc((100% - calc(300px + 12vw))/2);
    width: calc(400px + 23vw);
    height: calc(300px + 12vw);
    border-radius: 5px;
    background: transparent;
    background:rgba(250,250,250,0.8);
    z-index: 100;
}
.btn{
    position: absolute;
    cursor: pointer;
    font-size: calc(15px + 0.7vw);
}
.btn:hover{
    transform: scale(0.98);
}
.log{
    width: 40%;
    height: 8%;
    left: 30%;
    background: rgba(64, 89, 173, 0.65);
    border: none;
    color: white;
}
.reg{
    width: 20%;
    left: 80%;
    bottom: 2%;
    font-family: Montserrat;
    text-decoration-line: underline;
    color: #555555;
    background: transparent;
    border: none;
}
input{
    position: relative;
    text-align: center;
    font-size: calc(12px + 0.8vw);
    width: 66%;
    top: -5%;
    left: 17%;
    margin-bottom: calc(10px + 1vw);
}
h1{
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: calc(50px + 3vw);
    text-align: center;
    margin-top: calc(10px + 0.5vw);
    margin-bottom: 3vw;
}
.border{
    border-radius: 20px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rectangle1{
    background: #4059AD;
    grid-area: 1 / 1 / 45 / 20;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    border-radius: 0px 0px 20px 0px;
    z-index: 1;
}
.rectangle2{    
    background: #F4B942;
    grid-area: 60 / 85 / 101 / 101;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 1;
    border-radius: 20px 0 0 0;
}
.rectangle3{
    background: #97D8C4;
    grid-area: 1 / 10 / 15 / 28;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 0 20px 20px;
}
.rectangle4{
    background: #EFF2F1;    
    grid-area: 25 / 1 / 55 / 15;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 20px 20px 0;
}
.rectangle5{
    background: #97D8C4;
    grid-area: 28 / 10 / 48 / 23;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
}
.rectangle6{
    background: #EFF2F1;
    grid-area: 3 / 18 / 15 / 32;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
}
.rectangle7{
    background: #4059AD;
    grid-area: 7 / 21 / 19 / 28;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
}
.rectangle8{
    background: #F4B942;
    grid-area: 10 / 15 / 22 / 23;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
}
.rectangle9{
    background: #F4B942;
    grid-area: 42 / 5 / 58 / 13;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4; 
}
.rectangle10{
    background: #EFF2F1;    
    grid-area: 50 / 83 / 80 / 95;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
}
.rectangle11{
    background: #EFF2F1;    
    grid-area: 85 / 78 / 101 / 88;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 20px 20px 0 0;
}
.rectangle12{
    background: #4059AD;
    grid-area: 65 / 75 / 92 / 97;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
}
.rectangle13{
    background: #97D8C4;
    grid-area: 86 / 86 / 96 / 92;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
}
.rectangle14{
    background: #EFF2F1;    
    grid-area: 80 / 90 / 90 / 100;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
}
.rectangle15{
    background: #97D8C4;
    grid-area: 86 / 74 / 101 / 81;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
    border-radius: 20px 20px 0 0;
}
.rectangle16{
    background: #EFF2F1;    
    grid-area: 80 / 70 / 96 / 79;            /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
}
.rectangle17{
    background: #F4B942;
    grid-area: 90 / 66 / 98 / 77;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 5; 
}
.rectangle18{
    background: #97D8C4;
    grid-area: 55 / 79 / 74 / 88;           /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
}
</style>