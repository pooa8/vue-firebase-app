<template>
  <div class="signUp">
    <h3>Happy with us !</h3>
    <input v-model="name" type="text" placeholder="Name"><br/>
    <input v-model="email" type="text" placeholder="E-mail"><br/>
    <input v-model="password" type="password" placeholder="Password" maxlength="16" @blur="pwValid"><br/>
    <div v-if="!pwValidFlag">대문자/소문자/숫자 각 1자리를 포함한 8자~16자 비밀번호를 설정해주세요.</div>
    <button v-on:click="join">Join</button>
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
        alert("이름을 입력해주세요.")
        return
      }
      else if (this.email == "") {
        alert("이메일을 입력해주세요.")
        return
      }
      else if (this.password == null) {
        alert("비밀번호를 입력해주세요.")
        return
      }
      if (!this.pwValidFlag) {
        alert("비밀번호를 확인해주세요.")
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created !')
          //this.$router.replace('/login')
        },
        function (err) {
          alert('Oops. ' + err.message)
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
  margin-top: 40px;
}
input {
  margin: 5px 0;
  width: 20%;
  cursor: pointer;
}
</style>