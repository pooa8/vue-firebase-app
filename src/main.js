// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

let app;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA_6DxtdhajE2asTQ8w_Vubup-VtJnZ33Y",
  authDomain: "vue-firebase-2c18b.firebaseapp.com",
  projectId: "vue-firebase-2c18b",
  storageBucket: "vue-firebase-2c18b.appspot.com",
  messagingSenderId: "450076729571",
  appId: "1:450076729571:web:e5f3af7827443b3b5625d6",
  measurementId: "G-P7ZH62KT3Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user) {
  /* Firebase Auth 객체가 준비된 경우에만 앱을 초기화 */
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});