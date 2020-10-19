<template>
  <div class="login-form">
    <h1>Log in</h1>
    <div class="hint">Using your email and password</div>
    <v-form
      @submit.prevent="submitLoginForm"
    >
      <v-text-field
        type="email"
        v-model="email"
        label="Email"
        height="48"
        outlined
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        label="Password"
        height="48"
        outlined
      ></v-text-field>

      <div
        v-if="error"
        class="red--text my-2"
      >Incorect login or password.</div>
      <v-btn
        type="submit"
        color="primary"
        block
        x-large
      >
        LOGIN
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { State, Action, Getter } from 'vuex-class'
import { Component, Vue, } from 'vue-property-decorator'

const namespace: string = 'auth'

@Component
export default class LoginForm extends Vue {
  email: string = ''
  password: string = ''
  error: boolean = false

  @Action('login', { namespace })
  login: any

  submitLoginForm() {
    this.login({
      email: this.email,
      password: this.password
    }).then((status: boolean) => {
      if (status) {
        this.$router.push('/')
        this.error = false
      } else {
        this.error = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables/_grid.scss';

.login-form {
  background-color: white;
  border-radius: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 16px 40px;
  width: 280px;

  @media #{$media-sm-up} {
    width: 380px;
    padding: 50px 55px 40px;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }

  .hint {
    color: rgba(0, 0, 0, 0.54);
    margin: 15px;
  }
}

</style>
