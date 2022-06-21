<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="app">
    <Navbar>FPBM</Navbar>
    <router-view></router-view>
    <!-- <InstructorApp /> -->
  </div>
</template>

<script>
// import InstructorApp from "./components/InstructorApp.vue";
import Navbar from "./components/Navbar.vue";
// import Departement from "./pages/Departement.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Departement,
  },
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@5.0.0/dist/css/bootstrap.min.css);
</style>
