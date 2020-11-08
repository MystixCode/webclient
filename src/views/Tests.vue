<template>
  <div class="tests">
    <h2>Tests view component</h2>
     <TestList />
  </div>
</template>

<script>
import TestList from '@/components/TestList.vue'
export default {
  name: 'Tests',
  components: {
    TestList
  }
}
</script>
<style scoped>

</style>
