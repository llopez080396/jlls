<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import hc_home from './components/PaymentServices.vue'
//import PopuModal from './components/TestFigma.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Home:hc_home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
