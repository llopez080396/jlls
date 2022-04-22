<template>
  <div id="app">
    <Home/>
    <Carousel2/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
 import hc_home from './components/PaymentServices.vue'
//import CarouselGood from './components/CarouselBoot.vue'
 import PruebaPagoAsd from './components/carruselVue.vue'
//import CarouselSplide  from './components/CarouselSplide.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Home:hc_home,
   // Carousel:CarouselGood,
    Carousel2:PruebaPagoAsd
  }
}
</script>

<style>
 /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}  */
</style>
