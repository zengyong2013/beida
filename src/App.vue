<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body,ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
