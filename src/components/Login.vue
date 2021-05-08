<template>
  <div class="login">
    <h2>Log in to Pikku</h2>
    <div class="form-floating mb-3">
      <input v-model="email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
      <label for="floatingEmail">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" maxlength="16">
      <label for="floatingPassword">Password</label>
    </div>
    <br/>
    <button v-on:click="login" type="button" class="btn btn-info">LOG IN</button>
    <p>Not a member? <router-link to="/signUp">Sign up!</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Whoops! Unable to log in. ' + err.message)
        }
      );
    }
  }
}
</script>

<style>
.login {
  margin-top: 40px;
  text-align: center;
  vertical-align: middle;
}
input {
  cursor: pointer;
}
</style>