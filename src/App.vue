<template>
  <div class="app">
      <NavtopComponent/>
      <router-view/>
      <FooterComponent/>
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}

html{
  scroll-behavior: smooth;
}
</style>