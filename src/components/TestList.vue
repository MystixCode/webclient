<template>
  <div class="tests">
    <h3>TestList Component</h3>
    <div v-for="test in testlist" :key="test.id">
      <TestItem v-bind:test="test" />
    </div>
  </div>
</template>

<script>
import TestItem from './TestItem.vue';

export default {
  name: "TestList",
  components: {
    TestItem
  },
  data() {
    return {
      testlist: []
    }
  },
  mounted () {
    window.axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.testlist = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.tests{
  padding-top: 10px;
}
</style>
