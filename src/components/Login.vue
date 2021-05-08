<template>
  <div class="login">
    <h3>Log In to Pikku</h3>
    <input v-model="email" type="text" placeholder="EMAIL ADDRESS" ><br/>
    <input v-model="password" type="password" placeholder="PASSWORD"><br/>
    <br/>
    <button v-on:click="login">LOG IN</button>
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
}
input {
  margin: 5px 0;
  width: 20%;
  cursor: pointer;
}
</style>