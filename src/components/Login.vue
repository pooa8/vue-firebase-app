<template>
  <div class="login">
    <h3>Welcome !</h3>
    <input type="text" placeholder="E-mail" ><br/>
    <input type="password" placeholder="Password"><br/>
    <br/>
    <button v-on:click="login">Login</button>
    <p>If You want to join, <router-link to="/signUp">Sign Up!</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {}
  },
  methods: {
    login() {
      this.$router.replace('hello')
    }
  }
}
</script>

<style>
.login {
  margin-top: 40px;
}
input {
  margin: 5px 0;
  width: 20%;
  cursor: pointer;
}
</style>