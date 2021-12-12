<template>
  <div class="loginBackground">
    <div class="rectangle1 border">1</div>
    <div class="rectangle2 border">2</div>
    <div class="rectangle3 border">3</div>
    <div class="rectangle4 border">4</div>
    <div class="rectangle5 border">5</div>
    <div class="rectangle6 border">6</div>
    <div class="rectangle7 border">7</div>
    <div class="rectangle8 border">8</div>
    <div class="rectangle9 border">9</div>
    <div class="rectangle10 border">10</div>
    <div class="rectangle11 border">11</div>
    <div class="rectangle12 border">12</div>
    <div class="rectangle13 border">13</div>
    <div class="rectangle14 border">14</div>
    <div class="rectangle15 border">15</div>
    <div class="rectangle16 border">16</div>
    <div class="rectangle17 border">17</div>
    <div class="rectangle18 border">18</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import '~/assets/css/LoginStyling.css';
.border {
  border-radius: 20px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.rectangle1 {
  background: #4059ad;
  grid-area: 1 / 1 / 45 / 20; /* <row-start> / <column-start> / <row-end> / <column-end> */
  border-radius: 0px 0px 20px 0px;
  z-index: 1;
}
.rectangle2 {
  background: #f4b942;
  grid-area: 60 / 85 / 101 / 101; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 1;
  border-radius: 20px 0 0 0;
}
.rectangle3 {
  background: #97d8c4;
  grid-area: 1 / 10 / 15 / 28; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 2;
  border-radius: 0 0 20px 20px;
}
.rectangle4 {
  background: #eff2f1;
  grid-area: 25 / 1 / 55 / 15; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 2;
  border-radius: 0 20px 20px 0;
}
.rectangle5 {
  background: #97d8c4;
  grid-area: 28 / 10 / 48 / 23; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
}
.rectangle6 {
  background: #eff2f1;
  grid-area: 3 / 18 / 15 / 32; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
}
.rectangle7 {
  background: #4059ad;
  grid-area: 7 / 21 / 19 / 28; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 4;
}
.rectangle8 {
  background: #f4b942;
  grid-area: 10 / 15 / 22 / 23; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 4;
}
.rectangle9 {
  background: #f4b942;
  grid-area: 42 / 5 / 58 / 13; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 4;
}
.rectangle10 {
  background: #eff2f1;
  grid-area: 50 / 83 / 80 / 95; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 2;
}
.rectangle11 {
  background: #eff2f1;
  grid-area: 85 / 78 / 101 / 88; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 2;
  border-radius: 20px 20px 0 0;
}
.rectangle12 {
  background: #4059ad;
  grid-area: 65 / 75 / 92 / 97; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
}
.rectangle13 {
  background: #97d8c4;
  grid-area: 87 / 86 / 96 / 92; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
}
.rectangle14 {
  background: #eff2f1;
  grid-area: 80 / 90 / 90 / 100; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 4;
}
.rectangle15 {
  background: #97d8c4;
  grid-area: 86 / 74 / 101 / 81; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
  border-radius: 20px 20px 0 0;
}
.rectangle16 {
  background: #eff2f1;
  grid-area: 80 / 70 / 96 / 79; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 4;
}
.rectangle17 {
  background: #f4b942;
  grid-area: 90 / 66 / 98 / 77; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 5;
}
.rectangle18 {
  background: #97d8c4;
  grid-area: 55 / 79 / 74 / 88; /* <row-start> / <column-start> / <row-end> / <column-end> */
  z-index: 3;
}
@media (max-width: 1100px) {
  .rectangle1 {
    background: #4059ad;
    grid-area: 1 / 1 / 45 / 30; /* <row-start> / <column-start> / <row-end> / <column-end> */
    border-radius: 0px 0px 20px 0px;
    z-index: 1;
  }
  .rectangle2 {
    background: #f4b942;
    grid-area: 60 / 78 / 101 / 101; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 1;
    border-radius: 20px 0 0 0;
  }
  .rectangle3 {
    background: #97d8c4;
    grid-area: 1 / 15 / 15 / 38; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 0 20px 20px;
  }
  .rectangle4 {
    background: #eff2f1;
    grid-area: 25 / 1 / 55 / 25; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 20px 20px 0;
  }
  .rectangle5 {
    background: #97d8c4;
    grid-area: 28 / 15 / 48 / 33; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle6 {
    background: #eff2f1;
    grid-area: 3 / 23 / 15 / 42; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle7 {
    background: #4059ad;
    grid-area: 7 / 26 / 19 / 38; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle8 {
    background: #f4b942;
    grid-area: 10 / 20 / 22 / 33; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle9 {
    background: #f4b942;
    grid-area: 42 / 10 / 58 / 23; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle10 {
    background: #eff2f1;
    grid-area: 50 / 73 / 80 / 94; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
  }
  .rectangle11 {
    background: #eff2f1;
    grid-area: 85 / 68 / 101 / 87; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 20px 20px 0 0;
  }
  .rectangle12 {
    background: #4059ad;
    grid-area: 65 / 65 / 92 / 96; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle13 {
    background: #97d8c4;
    grid-area: 87 / 83 / 96 / 93; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle14 {
    background: #eff2f1;
    grid-area: 80 / 86 / 90 / 99; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle15 {
    background: #97d8c4;
    grid-area: 86 / 64 / 101 / 75; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
    border-radius: 20px 20px 0 0;
  }
  .rectangle16 {
    background: #eff2f1;
    grid-area: 80 / 60 / 96 / 73; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle17 {
    background: #f4b942;
    grid-area: 90 / 56 / 98 / 69; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 5;
  }
  .rectangle18 {
    background: #97d8c4;
    grid-area: 55 / 69 / 74 / 87; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
}
@media (max-width: 500px) {
  .rectangle1 {
    background: #4059ad;
    grid-area: 1 / 1 / 45 / 40; /* <row-start> / <column-start> / <row-end> / <column-end> */
    border-radius: 0px 0px 20px 0px;
    z-index: 1;
  }
  .rectangle2 {
    background: #f4b942;
    grid-area: 60 / 78 / 101 / 101; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 1;
    border-radius: 20px 0 0 0;
  }
  .rectangle3 {
    background: #97d8c4;
    grid-area: 1 / 20 / 15 / 50; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 0 20px 20px;
  }
  .rectangle4 {
    background: #eff2f1;
    grid-area: 25 / 1 / 55 / 35; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 0 20px 20px 0;
  }
  .rectangle5 {
    background: #97d8c4;
    grid-area: 28 / 15 / 48 / 50; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle6 {
    background: #eff2f1;
    grid-area: 3 / 33 / 15 / 65; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle7 {
    background: #4059ad;
    grid-area: 7 / 37 / 19 / 58; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle8 {
    background: #f4b942;
    grid-area: 10 / 28 / 22 / 45; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle9 {
    background: #f4b942;
    grid-area: 42 / 10 / 58 / 32; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle10 {
    background: #eff2f1;
    grid-area: 50 / 65 / 80 / 91; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
  }
  .rectangle11 {
    background: #eff2f1;
    grid-area: 85 / 68 / 101 / 85; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 2;
    border-radius: 20px 20px 0 0;
  }
  .rectangle12 {
    background: #4059ad;
    grid-area: 65 / 48 / 92 / 94; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle13 {
    background: #97d8c4;
    grid-area: 87 / 73 / 96 / 91; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
  .rectangle14 {
    background: #eff2f1;
    grid-area: 80 / 77 / 90 / 99; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle15 {
    background: #97d8c4;
    grid-area: 86 / 48 / 101 / 69; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
    border-radius: 20px 20px 0 0;
  }
  .rectangle16 {
    background: #eff2f1;
    grid-area: 80 / 40 / 96 / 65; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 4;
  }
  .rectangle17 {
    background: #f4b942;
    grid-area: 90 / 33 / 98 / 62; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 5;
  }
  .rectangle18 {
    background: #97d8c4;
    grid-area: 55 / 55 / 74 / 80; /* <row-start> / <column-start> / <row-end> / <column-end> */
    z-index: 3;
  }
}
.rectangleSlide {
  background: #eff2f1;
  grid-area: 1 / 30 / 100 / 100;
  z-index: 100;
}
</style>
