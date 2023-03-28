<template>
  <div>
    <NavBarVue />
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import NavBarVue from "./components/NavBar.vue";
export default {
  components: { NavBarVue, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kodchasan");

* {
  font-family: "Kodchasan", sans-serif;
}
</style>
