<script>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

import Logo from '../assets/image/logo.webp'
import LogoUnidel from '../assets/image/logo_2.webp'
  
  import '../assets/styles.css'
export default {
  data() {
    return {
      Logo: Logo,
      Logo2: LogoUnidel
    }
  },
}

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container-fluid">
      <router-link  class="d-flex align-items-center justify-content-between gap-3 navbar-brand">
        <img class="nacos" :src="Logo" alt="nacos_logo">
        <div>
          <img :src="Logo2" class="unidel" alt="Unidel">
        </div>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link active" aria-current="page">About Us</router-link>

          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Action</a></li>
              <li><a class="dropdown-item">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
