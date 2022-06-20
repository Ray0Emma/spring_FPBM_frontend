<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="container">
    <InstructorApp />
  </div>
</template>

<script>
import InstructorApp from "./components/InstructorApp.vue";

export default {
  name: "App",
  components: {
    InstructorApp,
  },
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>
