<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/layout'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
body,ul,li,span,i {
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
.bar{
  h3{
    font-size: 18px;
    margin: 0 0 20px 0;
  }
  .custom-tree-node{
    line-height: 30px;
  }
  .icon1, .icon2{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px 5px 0 0;
  }
  .icon1{
    background: url(./assets/icon1.png) 0 5px no-repeat;
    background-size: cover;
  }
  .icon2{
    background: url(./assets/icon2.png) 0 5px no-repeat;
    background-size: cover;
  }
}
</style>
