<template>
    <div>
      
       <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        
        <h5 class="modal-title">
          <button v-bind:class="getButton()" @click="userLogin">Signin</button>
          <button v-bind:class="getButton()" @click="userRegister">Signup</button>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row" v-if="login">
          <div class="col-lg-12">
            <h3>Sign in</h3>
            <form action="">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Email-Address">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
              </div>
              <button class="btn btn-primary">Signin</button>
            </form>
          </div>
        </div>
        <div class="row" v-if="register">
          <div class="col-lg-12">
              <h3>Create New Account</h3>
            <form action="">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" v-model="name" class="form-control" name="name" id="name" placeholder="Full Name">
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="Email-Address">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" name="password" id="password" placeholder="Password">
              </div>
              <button class="btn btn-primary" @click="registerUser">Signup</button>
            </form>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import {fb} from '../firebase'
export default {
    name : 'Login',
    data(){
      return {
        login : true,
        register : false,
        name : null,
        email : null,
        password : null
      }
    },
    methods : {
      getButton(){
        if(this.login == true){
          return 'btn btn-primary';
        }else if(this.register == false){
          return 'btn btn-default';
        }
      },
      userLogin(){
        this.login = true;
        this.register = false;
      },
      userRegister(){
        this.login = false;
        this.register = true;
      },
      registerUser(){
        fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(()=>{
          this.$router.replace('admin');
        })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
      }
    }
}
</script>