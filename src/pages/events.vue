<template>
    <div>
        <Header/>
        <div class="events-container">
            <img class="events-img" :src="Events" alt="">
            <p class="page-info">Information concerning our events would be passed on here</p>
            <div class="events-holder bg-black">
                <button disabled class="upcoming-events-btn  d-flex align-items-center justify-content-center">UPCOMING EVENTS</button>
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
    import Events from '../assets/image/events.webp'
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';
export default {
    data() {
        return{
            name: 'events',
            Events
        }
    },
    components: {
        Header,
        Footer
    },
}
</script>
<style>

</style>