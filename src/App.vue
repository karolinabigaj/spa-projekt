<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from "@/components/MainScreen";

export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
}
</style>
