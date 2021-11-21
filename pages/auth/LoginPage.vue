<template>
    <div>
        <backRectangles />
        <div class="container">
            <h1>REGIS</h1>
            <input id="Email" type="text" placeholder="Email" v-model="email">
            <input id="Password" type="text" placeholder="Password" v-model="password">
          <button class="btn log" @click="login">
            Login
          </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import backRectangles from '../../components/backRectangles.vue';

@Component({
  components: {
    backRectangles,
  }
})
export default class LoginPage extends Vue {
  @Inject()
  email!: string;

  @Inject()
  password!: string;

  async login() {
    await this.$auth.loginWith('provider', {
      data: {
        email: this.email,
        password: this.password
      }
    })
  }
}
</script>

<style scoped>
@import '../../components/css-files/LoginStyling.css';

.log{
    width: 40%;
    height: 9%;
    background: rgba(64, 89, 173, 0.65);
    margin-bottom: calc(10px + 0.5vw);
    color: white;
}

</style>
