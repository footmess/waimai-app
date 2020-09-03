<template>
  <div id="app">
    <!-- <div>{{process.env.VUE_APP_target}}</div> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <img src="./xxxxx.png"> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    uuu
    // console.log(process.env.VUE_APP_target)
    // window.onerror = (...args) => {
    //   console.log('trigger');
    //   console.log('onerror:',args)
    // }
  },
  created() {
    ijaoi
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
}
</style>
