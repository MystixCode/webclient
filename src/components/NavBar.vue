<template>
  <ul>
    <li><router-link to="/" exact-active-class="active">Home</router-link></li>
    <li><router-link to="/tests" exact-active-class="active">Tests</router-link></li>
    <li><router-link to="/about" exact-active-class="active">About</router-link></li>
    <li style="float:right"><router-link to="">Login</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  background-color: #616161;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #333;
}
li a:hover:not(.active) {
  background-color: #ad5cdf;
}
.active {
  background-color: #8134b4;
}
.active:hover {
  background-color: #ad5cdf;
}
</style>
