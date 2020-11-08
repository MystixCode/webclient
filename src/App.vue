<template>
  <h1>Mystix Vue Client</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/tests">Tests</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #222;
  color: #f5f5f5;
  text-align: center;

}

a {
    color: #8134b4;
    text-decoration: none;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ad5cdf;
}
</style>
