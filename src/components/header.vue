<script>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

import Logo from '../assets/image/new-main-logo.webp'
// import LogoUnidel from '../assets/image/logo_2.webp'
  
  import '../assets/styles.css'
export default {
  data() {
    return {
      Logo: Logo,
      // Logo2: LogoUnidel
    }
  },
}


</script>

<template>
  <nav class="navbar shadow w-100 navbar-expand-lg bg-transparent">
    <div class="container-fluid">
      <router-link to="/" class="d-flex align-items-center justify-content-between gap-3 ms-md-4 navbar-brand">
        <img class="nacos" :src="Logo" alt="nacos_logo"> 
        <div>
          <!-- <img :src="Logo2" class="unidel" alt="Unidel"> -->
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
        </ul>
      </div>
    </div>
  </nav>
</template>
