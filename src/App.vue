<template>
  <!-- 此处为入口 公共部分可以放到这里 -->
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
  margin: 0;
}
</style>
