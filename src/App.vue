<template>
  <div class="app">
      <Navigation/>
      <router-view/>
      <Footer />
  </div>
</template>

<script>
  import Navigation from './components/NavbarView.vue'
  import Footer from './components/FooterView.vue'

  export default{
    name: "App",
    components: {
      Navigation,
      Footer,
    },
  }
</script>