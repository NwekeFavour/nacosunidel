<template>
    <div>
        <Header/>
        <div class="events-container">
            <img class="events-img" src="../assets/image/events-image.jpg" alt="">
            <p class="page-info">Information concerning our events would be passed on here</p>
            <div class="events-holder">
                <button class="upcoming-events-btn">UPCOMING EVENTS</button>
                <p class="no-events-txt">No Upcoming Events!!!</p>
            </div>
            <div class="more-info">
            <p>Check in later for our upcoming events</p>
            </div>
        </div>

    </div>
        <Footer/>
</template>


<script>
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';
export default {
    name: 'events',
    components: {
    Header,
    Footer
  },
}
</script>
<style>

</style>