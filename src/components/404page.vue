<script setup>
    import Error from '../assets/image/Frame 2.svg'
    import Group from '../assets/image/Group 1 (1).svg'
</script>

<template>
    <div class="mt-md-5 mt-4">
        <h1 class="text-center fw-bold  fs-1">Oops!</h1>
        <p class="m-0 text-center"> we've yet to make a decision on this page!</p>
    </div>
    <div class="d-flex justify-content-center align-items-center my-4 my-md-5">
        <img class="w-md-25" :src="Error" alt="">
    </div>
    <div>
        <router-link class="text-decoration-none text-success gap-1 align-items-center d-flex justify-content-center my-3 my-md-2" to="/">
            <img class="" :src="Group" alt="">
            Go Home</router-link>
    </div>
</template>

<style>
    
</style>