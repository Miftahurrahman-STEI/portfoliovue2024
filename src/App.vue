<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavbarView from './views/NavbarView.vue';
import Hero from './views/HeroesView.vue';
import Footer from './views/FooterView.vue';
</script>

<template>
  <div>
    <NavbarView/>
    <Hero/>
    <Footer/>
  </div>
</template>
