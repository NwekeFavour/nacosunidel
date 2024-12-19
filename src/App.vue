<script>
import Preloader from './assets/image/Gear.webp';

export default {
  data() {
    return {
      loading: true, // Initial loading state
      Preloader: Preloader
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true; 
      next(); 
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.loading = false; 
      }, 5000); 
    });
  },
};
</script>

<template>
  <div>
    <div class="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle" v-if="loading">
      <img :src="Preloader" alt="">
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<style>
/* Add global styles if needed */
</style>
  