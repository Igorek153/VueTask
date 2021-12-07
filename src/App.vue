<template>
  <div id="app">
    <TaskSearch/>
  </div>
</template>

<script>
import TaskSearch from './components/TaskSearch.vue'

export default {
  name: 'App',
  components: {
    TaskSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
