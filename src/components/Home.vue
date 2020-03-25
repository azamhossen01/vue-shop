<template>
  <div class="hello">
     <Navbar></Navbar>
    <h1>This is home page</h1>
    <Login></Login>
  </div>
</template>

<script>
// import Login from './Login.vue'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  // components : {Login}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
