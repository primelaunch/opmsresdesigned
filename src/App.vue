<template>
  <NavBar/>
  <router-view/>
  <FooterBar/>
</template>

<script setup>
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue';

</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
