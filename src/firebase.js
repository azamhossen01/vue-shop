import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5PfK0R4iD0FJACsOztTPq48wvrCabNSw",
    authDomain: "vue-shop-15f69.firebaseapp.com",
    databaseURL: "https://vue-shop-15f69.firebaseio.com",
    projectId: "vue-shop-15f69",
    storageBucket: "vue-shop-15f69.appspot.com",
    messagingSenderId: "322030764873",
    appId: "1:322030764873:web:857cc4cac34be4894ed098",
    measurementId: "G-HDBTFPSW40"
  };
  export const fb = firebase.initializeApp(firebaseConfig);