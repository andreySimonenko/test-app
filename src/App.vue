<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <div class="d-flex align-center white--text logo">
        CRM
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="isAuthStatus"
        class="logout"
        color="white"
        small
        @click="onLogout"
      >
        <span>Sign out</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
        © {{ new Date().getFullYear() }} — CRM
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">

import { State, Action } from 'vuex-class'
import { Component, Vue, } from 'vue-property-decorator'

const namespace: string = 'auth'

@Component({
  name: 'App'
})
export default class App extends Vue {
  @State('isAuthStatus', { namespace })
  isAuthStatus!: boolean

  @Action('logout', { namespace })
  logout!: Function

  onLogout() {
    this.logout()
    this.$router.push('login')
  }
}
</script>

<style lang="scss" scoped>

.theme--light.v-application {
  background-color: #E5E5E5;
}

.logo {
  font-size: 24px;
  font-weight: 900;
  line-height: 28px;
}

.logout.v-btn {
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  color: #1867C0;
}

.v-app-bar::v-deep {
  .v-toolbar__content {
    margin: 0 auto;
    max-width: 1160px;
  }
}

.theme--light.v-footer {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>
