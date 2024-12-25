<script>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

import axios from 'axios';
import Logo from '../assets/image/logo.webp'
import LogoUnidel from '../assets/image/logo_2.webp'
  import '../assets/styles.css'
export default {
  data() {
    return {
      Logo: Logo,
      Logo2: LogoUnidel,
      isAuthenticated: localStorage.getItem('token') ? true : false, // Initialize based on token in localStorage
      isAuth: localStorage.getItem('isSpecialAdmin') ? true : false, // Or other logic for isAuth
      isSpecialAdmin: localStorage.getItem('isSpecialAdmin') === 'true',  // To check for special admin

      
    }
  },
  methods: {
    async logout() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please log in again.');
        return;
      }

      try {
        // Send logout request to backend
        await axios.post('http://127.0.0.1:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        // Clear token and authentication data
        localStorage.removeItem('token');
        localStorage.removeItem('isSpecialAdmin');

        this.isAuthenticated = false;
        // Redirect to home page or login page
        // console.log('Logout successful');


        this.$router.push('/login');
        if (this.isAuthenticated == undefined) {
          this.isAuthenticated = false
        }
      } catch (error) {
        console.error('Logout failed:', error.response?.data || error.message);
        // alert('Logout failed. Please try again.');
      }
    }
  },
  

}

</script>

<template>
  <nav class="navbar shadow w-100 navbar-expand-lg bg-white">
    <div class="container-fluid">
      <router-link to="/" class="d-flex align-items-center justify-content-between gap-3 ms-md-4 navbar-brand">
        <img class="nacos" :src="Logo" alt="nacos_logo">
        <div>
          <img :src="Logo2" class="unidel" alt="Unidel">
        </div>
      </router-link>
      <button class="navbar-toggler outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse justify-content-end me-md-8 navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-black dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="true">
              More
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/blog" class="dropdown-item">Blogs</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/past-questions" class="dropdown-item">Past Questions</router-link></li>
              <li><hr class="dropdown-divider"></li>   
              <li><router-link to="/events" class="dropdown-item">Events</router-link></li>
            </ul>  
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link active" aria-current="page">About Us</router-link>
          </li> 
           <li class="bg-danger" v-if="isAuthenticated">
            <button @click="logout" class="btn text-start btn-danger w-100">Logout</button>
          </li>
          
          <!-- Login Link (displayed if not authenticated) -->
          <li v-else>
            <router-link to="/login" class="nav-link active d-md-none d-block">Login</router-link>
          </li>

          <li  v-if="isAuth && isSpecialAdmin">
            <router-link to="/dashboard" class="nav-link active d-block">Dashboard</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
