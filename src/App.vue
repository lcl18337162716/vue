<template>
  <div id="app" style="overflow:hidden;width:100%;height:100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>
