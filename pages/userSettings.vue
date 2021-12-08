<template>
  <div>
    <Navbar />
    <div class="mainContainer">
      <div class="userPhotoContainer">
        <div class="userPhoto"></div>
        <button class="userSideButton bot"></button>
        <button class="userSideButton middle"></button>
        <button class="userSideButton top"></button>
      </div>
      <div class="nameBox"><h1>Vardenis Pavardenis</h1></div>
      <div class="descriptionBox">Description:</div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style lang="scss">
.mainContainer {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userPhotoContainer {
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
  .userPhoto {
    width: 250px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: lightgray;
    background-image: url('https://cdn3.iconfinder.com/data/icons/business-finance-line-5/32/client-2-512.png');
    background-size: cover;
  }
  .userSideButton {
    position: absolute;
    width: 50px;
    aspect-ratio: 1;
    background: lightgray;
    border-radius: 50%;
  }
  .top {
    top: 5.5%;
    right: 13%;
  }
  .middle {
    right: 3.5%;
    top: 24%;
  }
  .bot {
    right: 1%;
  }
}
.nameBox {
  width: 45%;
  height: 50px;
  border-radius: 20px;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: normal;
  }
  margin: 10px;
}
.descriptionBox {
  width: 80%;
  height: 65px;
  background: lightgray;
  margin: 10px;
  border-radius: 20px;
  padding-left: 10px;
}
.box {
  width: 80%;
  height: 180px;
  background: lightgray;
  margin: 10px;
  border-radius: 20px;
}
</style>
