<script >
    import Header from '../components/header.vue';
    import Pres from '../assets/image/pres.webp'
    import Fin from '../assets/image/finsec.webp'
    import Vice from '../assets/image/vice.webp'
    import ICT from '../assets/image/It.webp'
import Footer from '../components/footer.vue';

    export default {
        data() {
            return {
                Pres: Pres,
                Fin: Fin,
                Vice: Vice,
                ICT, ICT
            }
        },
        components: {
            Header,
            Footer
        }
    }
</script>

<template>
    <div>
        <Header/>
        <div class="section-title border-2 border-start m-3  ps-3 border-success mb-75">
            <h2 class="fw-bold">MEET THE <span class="text-success fw-semibold">TEAM</span></h2>
            <p>1st Nacos UNIDEL Chapter Executives </p> <p></p>
        </div>
        <div class="executivess">
            <div class="mx-auto row   d-lg-flex align-items-center  py-md-5 justify-content-center">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres " :src="Pres" alt="">
                    </div>
                    <div >
                        <!-- position -->
                        <p class="m-0 presd">Nweke favour Samuel</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">President</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12 my-md-0 my-3">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="Vice" alt="">
                    </div>
                    <div>
                        <p class="m-0 presd">Okonmah Raphael</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Vice President</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12 my-md-3 my-3">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="Fin" alt="">
                    </div>
                    <div>
                        <p class="m-0 presd">Ifeanyi Sucess</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Treasurer</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="ICT" alt="">
                    </div>
                    <div>
                        <p class="m-0 presd">Paul .C. Prescilia</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Asst. Secretary</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
    
</style>