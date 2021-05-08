<template>
  <div class="hello">
    <h2>hello</h2>
  <button v-on:click="logout" type="button" class="btn btn-info">LOGOUT</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'logout',
  data() {
    return {
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('index')
      })
    }
  }
}
</script>

<style>

</style>