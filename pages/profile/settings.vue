<template>
  <div>
    <Navbar />
    <div class="mainContainer">
      <div class="userPhotoContainer">
        <div class="userPhoto">
          <img src="~assets/img/icons/account-alt.png" />
        </div>
        <div class="userSideButton top">
          <Dropdown>
            <div class="sideButton">
              <div class="sideButton-image">
                <img src="~/assets/img/icons/settings.png">
              </div>
              <p>Settings</p>
            </div>
            <template v-slot:content>
              <div class="text-center">
                <button class="button button-rounded button-wide button-warning" @click="logout">
                  Atsijungti
                </button>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="userSideButton middle">
          <Dropdown>
            <div class="sideButton">
              <div class="sideButton-image">
                <img src="~/assets/img/icons/alert.png">
              </div>
              <p>Report an issue</p>
            </div>
            <template v-slot:content>
              <Input name="shortDescription"
                     type="textarea"
                     v-model="bugReport"
                     :businessInput="true" />
              <div class="text-center">
                <button class="button button-rounded button-wide button-warning" @click="report">
                  Pranešti
                </button>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
      <div class="nameBox">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      bugReport: null,
    };
  },
  computed: {
    user() {
      return this.$auth.$state.user;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    report() {
      this.bugReport = null;

      this.$notify(
        {
          group: 'success',
          title: 'Veiksmas sėkmingas',
          text: 'Ačiū už praneštą klaidą!',
        },
        2000
      );
    }
  },
};
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
    height: 250px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
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
  background: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: normal;
    margin-top: 0;
  }

  margin: 2rem 10px;
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
