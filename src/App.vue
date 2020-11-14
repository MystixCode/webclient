<template>
  <div id="app">
    <h1>Mystix Vue Client</h1>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #222;
  color: #f5f5f5;
  text-align: center;
}
#app {
  margin: 5px;
}
</style>
