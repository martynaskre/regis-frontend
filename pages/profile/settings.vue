<template>
  <div>
    <Navbar />
    <div class="mainContainer">
      <div class="userPhotoContainer">
        <div class="userPhoto"></div>
        <div class="userSideButton top">
          <Dropdown>
            <div class="sideButton">
              <div class="sideButton-image">
                <img src="~/assets/img/icons/settings.png">
              </div>
              <p>Settings</p>
            </div>
          </Dropdown>
        </div>
        <div class="userSideButton middle">
          <Dropdown>
            <div class="sideButton">
              <div class="sideButton-image">
                <img src="~/assets/img/icons/edit.png">
              </div>
              <p>Edit</p>
            </div>
          </Dropdown>
        </div>
        <div class="userSideButton bot">
          <Dropdown>
            <div class="sideButton">
              <div class="sideButton-image">
                <img src="~/assets/img/icons/alert.png">
              </div>
              <p>Report an issue</p>
            </div>
          </Dropdown>
        </div>
      </div>
      <div class="nameBox"><h1>Vardenis Pavardenis</h1></div>
      <div class="descriptionBox">Description:</div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style lang="scss">
.dropdown-opened .sideButton {
  width: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.dropdown-opened .sideButton p {
  display: block;
  padding: 0 40px 0 20px;
}
.sideButton {
  height: 45px;
  width: max-content;
  background-color: #C4C4C4;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.sideButton p {
  display: none;
}
.sideButton .sideButton-image {
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  }
  .top {
    top: 3.5%;
    right: 15%;
  }
  .middle {
    right: 6%;
    top: 24%;
  }
  .bot {
    right: 5%;
    top: 48%;
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
