<template>
 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Vue Shop</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" >Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" >About</router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/admin" class="nav-link" >Admin</router-link>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button  data-toggle="modal" data-target="#login" class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
    </form>
  </div>

  <!-- <Login></Login> -->

</nav>
    
</template>
<script>
// import Login from './Login.vue';
export default {
    name : 'Navbar',
   
    // components : {Login}
}
</script>