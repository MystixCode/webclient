<template>
  <div class="test-item">
    <h3>TestItem component</h3>
    <p>{{test.userId}}</p>
    <p>{{test.id}}</p>
    <p>{{test.title}}</p>
  </div>
</template>

<script>
export default {
  name: "TestItem",
  props: ["test"]
}
</script>

<style scoped>

* {
    background: #444;
    
}
.test-item {
  padding: 10px;
  border-bottom: 1px #222 dotted;
}
</style>
