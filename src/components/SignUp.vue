<template>
  <div class="signUp">
    <h2>Hello Pikku !</h2>
    <div class="form-floating">
      <input v-model="name" type="text" class="form-control" id="floatingName" placeholder="Name">
      <label for="floatingName">Name</label>
    </div>
    <br/>
    <div class="form-floating mb-3">
      <input v-model="email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
      <label for="floatingEmail">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" maxlength="16" @blur="pwValid">
      <label for="floatingPassword">Password</label>
    </div>
    <br/>
    <div v-if="!pwValidFlag" class="alert alert-dismissible alert-danger">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <strong>대문자/소문자/숫자 1개 이상</strong> 포함한 8자~16자 비밀번호를 설정해주세요.
    </div>
    <button v-on:click="join" type="button" class="btn btn-success">JOIN</button>
    <p>Or <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      pwValidFlag: true
    }
  },
  methods: {
    join() {
      if (this.name == "") {
        alert("Please enter a name.")
        return
      }
      else if (this.email == "") {
        alert("Please enter a email.")
        return
      }
      else if (this.password == null) {
        alert("Please enter a password.")
        return
      }
      if (!this.pwValidFlag) {
        alert("Please enter a valid password.")
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created !')
        },
        function (err) {
          alert('Whoops! ' + err.message)
        }
      );
    },
    pwValid () {
      // 비밀번호 대문자 / 소문자 / 숫자 1개 이상 및 8자리 이상 16자리 이하
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.password)) { 
        this.pwValidFlag = true 
      }
      else {
        this.pwValidFlag = false 
      }
    }
  },
  computed: {
  }
}
</script>

<style>
.signUp {
  margin-top: 10px;
  text-align: center;
}
</style>