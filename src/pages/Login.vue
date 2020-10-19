<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LoginForm from '@/components/LoginForm.vue'

@Component({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {
}
</script>

<style lang="scss" scoped>

.login-page {
  display: flex;
  height: 100%;
}

</style>
