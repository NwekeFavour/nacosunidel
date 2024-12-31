<template>
    <div>
        <Header/>
        <div class="blog-container">
            <p class="blog-intro">BLOGS</p>
            <h1 class="blog-header">SUBSCRIBE TO OUR NEWSLETTER!<span>🚀</span></h1>
            <p class="blog-det">By offering real-time updates on industry trends and the latest innovations, 
                tech blogs give students practical insights that go beyond what they learn in the classroom.
            </p>
            <div class="blog-input-tab">
                <input type="text" placeholder="Email Address">
                <button>Subscribe</button>
            </div>
        </div>

    </div>
        <Footer/>
</template>


<script>
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';
export default {
    name: 'blog',
    components: {
    Header,
    Footer
  },
}
</script>
<style>

</style>