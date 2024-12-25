<script>
import Header from '../components/header.vue';


export default {
    data() {
        return {
            isAuthenticated: localStorage.getItem('token') ? true : false, // Initialize based on token in localStorage
            isAuth: localStorage.getItem('isSpecialAdmin') ? true : false, // Or other logic for isAuth
        }
    },
    components: {
        Header
    }
}
</script>

<template>
    <div>
        <Header :isAuth="isAuth"  :isAuthenticated="isAuthenticated"/>
    </div>
</template>

<style>
    
</style>