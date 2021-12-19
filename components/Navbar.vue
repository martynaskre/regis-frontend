<template>
  <div>
    <div class="rect first"></div>
    <div class="rect second"></div>
    <div class="rect third"></div>
    <div class="rect forth"></div>
    <div class="rect fifth"></div>
    <div class="navSpacing">
      <nuxt-link to="/">
        <h1>Regis</h1>
      </nuxt-link>
      <div class="buttons">
        <template v-if="$store.getters.providerLoggedIn">
          <nuxt-link to="/business" class="btn plus" />
          <nuxt-link to="/business/calendar" class="btn calendar" />
          <nuxt-link to="/profile/settings" class="btn user" />
        </template>
        <template v-else-if="$store.getters.clientLoggedIn">
          <nuxt-link to="/calendar" class="btn calendar" />
          <nuxt-link to="/profile/settings" class="btn user" />
        </template>
        <nuxt-link v-else to="/auth/" class="btn user" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navSpacing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  position: relative;
  z-index: 11;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.btn.user:before {
  content: '';
  width: 59px;
  height: 56px;
  display: block;
  background: url('~/assets/img/icons/account.png');
}
.btn.calendar:before {
  content: '';
  width: 52px;
  height: 53px;
  display: block;
  background: url('~/assets/img/icons/calendar.png');
  left: 1px;
  top: 1px;
  position: relative;
}
.btn.plus:before {
  content: '';
  width: 58px;
  height: 56px;
  display: block;
  background: url('~/assets/img/icons/plus.png');
  position: relative;
}
.rect {
  position: absolute;
  height: 90px;
  left: 0;
  top: 0px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 60px 0px;
}
.first {
  width: 20%;
  background: #4059ad;
  z-index: 10;
}
.second {
  width: 41%;
  background: #6b9ac4;
  z-index: 9;
}
.third {
  width: 61%;
  background: #97d8c4;
  z-index: 8;
}
.forth {
  width: 81%;
  background: #eff2f1;
  z-index: 7;
}
.fifth {
  width: 100%;
  background: #f4b942;
  z-index: 6;
  border-radius: 0;
}
h1 {
  position: relative;
  line-height: 90px;
  z-index: 11;
  font-size: 50px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

@media (max-width: 1100px) {
  .rect {
    height: 65px;
  }
  .btn {
    height: 45px;
    width: 45px;
  }
  .btn.btn.user:before {
    width: 45px;
    height: 43px;
    background-size: cover;
  }
  .btn.calendar:before {
    width: 38px;
    height: 38px;
    background-size: cover;
  }
  .btn.plus:before {
    width: 42px;
    height: 42px;
    left: -1px;
    background-size: cover;
  }
  h1 {
    line-height: 65px;
    font-size: 40px;
  }
}

@media (max-width: 500px) {
  .rect {
    height: 45px;
  }
  .btn {
    height: 30px;
    width: 30px;
  }
  .btn.btn.user:before {
    width: 29px;
    height: 29px;
    position: relative;
    left: -0.5px;
    background-size: cover;
  }
  .btn.calendar:before {
    width: 26px;
    height: 26px;
    top: -0.5px;
    background-size: cover;
  }
  .btn.plus:before {
    width: 28px;
    height: 28px;
    background-size: cover;
  }
  h1 {
    line-height: 45px;
    font-size: 30px;
  }
}
</style>
