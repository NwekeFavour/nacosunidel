<script>
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';
    import '../assets/styles.css'
    import Image from '../assets/image/groupspics.webp'
    import ImageTwo from '../assets/image/secongroupspics.jpg'
    import Code from '../assets/image/new-main-logo.webp'
    import Pres from '../assets/image/pres.webp'
    import Fin from '../assets/image/finsec.webp'
    import Vice from '../assets/image/vice.webp'
    import ICT from '../assets/image/It.webp'
    import Aos from 'aos';
    import 'aos/dist/aos.css'

    export default {
        data() {
            return {
                Image: Image,
                ImageTwo: ImageTwo,
                Code: Code,
                Pres: Pres,
                Vice : Vice,
                Fin, Fin,
                ICT: ICT
            }
        },
        components: {
            Header,
            Footer
        },
        mounted() {
            Aos.init()        
        }
    }
</script>
    
<template>
    <div>
        <Header
        :isAuthenticated="isAuthenticated"/>
        <div>
            <div id="carouselExampleAutoplaying" class="carousel mb-md-3 mb-4 slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div data-bs-interval="2000" class="carousel-item  h-25 active">
                        <img :src="Image" class=" d-block imgplaceholder" alt="img_carousel">
                        <div data-aos="fade-up" class="carousel-caption welcome d-block">
                            <h5 class="mb-3">Welcome to NACOS UNIDEL</h5>
                            <p>From Turing Machines to the metaverse, A Journey throught the evolution of computing.</p>
                            <div class="d-flex align-items-center gap-4 justify-content-center">
                                <div class="">
                                    <router-link
                                        id=""
                                        class="btn py-md-3 py-2 px-4 rounded-4 px-md-5 btn-carousel"
                                        to="/about-us"
                                        role="button"
                                        >About</router-link
                                    >                                    
                                </div>
                                <div class="">
                                    <router-link
                                        id=""
                                        class="btn rounded-4 py-2 px-4 py-md-3 px-md-5 btn-carousel"
                                        to="/login"
                                        role="button"
                                        >Login</router-link
                                    > 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bs-interval="2000" class="carousel-item  h-25">
                        <img :src="Image" class=" d-block imgplaceholder" alt="img_carousel">
                    </div>
                    <div data-bs-interval="2000" class="carousel-item  h-25">
                        <img :src="ImageTwo" class=" d-block imgplaceholder" alt="img_carousel">
                    </div>
                </div>
            </div>
            <div class="computing  mx-md-3 my-md-4">
                <div class="wedo">
                    <p class="m-0 text-center text-secondary fw-semibold">What we do</p>
                </div>
                <div>
                    <p class="m-0 text-center stud text-secondary-emphasis ">We help Computing students make the right decisions</p>
                </div>
                <div class="my-5 container w-100 mx-auto">
                    <div class="row gap-5 d-flex justify-content-center ">
                        <div class="seminars col-lg-5 col-md-5 col-12">
                            <div class="mt-5">
                                <p class="m-0 pt-3  virtual text-success fw-bold text-sm">Virtual</p>
                            </div>
                            <div class="elementor-element elementor-element-f3e1e5e elementor-widget elementor-widget-heading" data-id="f3e1e5e" data-element_type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                    <h3 class="text-white text-uppercase elementor-size-default">Seminars / Bootcamps</h3>		
                                </div>
                            </div>
                            <div class="my-5">
                                <p class="m-0 text-capitalize coming text-white">next edition coming soon</p>
                            </div>
                            <div>
                                <router-link to="/signup" class="d-flex text-decoration-none text-white flex-row align-items-center bg-success gap-2 rounded-sm px-3 py-2 border border-white border-solid"><p class="d-flex m-0 align-items-center gap-1 text-capitalize">register</p>
                                </router-link>
                            </div>
                        </div>
                        <div class="scholarships col-lg-5 col-md-5 col-12">
                            <div class="mt-5">
                                <p class="m-0 pt-3 virtual text-success fw-bold text-sm">Students</p>
                            </div>
                            <div class="elementor-element elementor-element-f3e1e5e elementor-widget elementor-widget-heading" data-id="f3e1e5e" data-element_type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                    <h3 class="text-white text-uppercase elementor-size-default">Scholarships</h3>		
                                </div>
                            </div>
                            <div class="mt-4 mb-5">
                                <p class="m-0 text-capitalize coming text-white">We sponsor students tuiton fees, courses, certifications and hardware acquisition</p>
                            </div>
                            <div>
                                <router-link to="/register" class="d-flex text-decoration-none text-white flex-row align-items-center bg-success gap-2 rounded-sm px-3 py-2 border border-white border-solid"><p class="d-flex m-0 align-items-center gap-1 text-capitalize">apply now</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid ">
                <div class="row  d-flex m-5 justify-content-around">
                    <div class="col-lg-3  col-md-12 d-flex align-items-center justify-content-center">
                        <img :src="Code" class="code" alt="code">
                    </div>
                    <div class="col-lg-6 rows col-md-12 col-sm-12  col-12 col-xs-12">
                        <div class="  mt-md-0 mt-3">
                            <h3>About Us</h3>
                            <div class="content mt-md-0 mt-2">
                                <p>The Nigerian Association of Computing Students (UNIDEL chapter) is a dynamic group of students from the Faculty of Computing at UNIDEL. The association is dedicated to enhancing the technical skills and social well-being of its members while fostering a strong connection between the academic environment and the computer industry.</p>
                                <p>It comprises of students ranging from year 1 to year 5. We back backed up by 5 different staff advisers which see to and aid the operations of the association as well as provide adviser on matters beyond our control</p>
                            </div>
                            <router-link to="/about-us" class="text-capitalize text-decoration-none read text-success">read more</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="executives">
                <div>
                    <p class="m-0 text-center exe">Meet Your Executives</p>
                </div>
                <div class="mx-auto row   d-lg-flex align-items-center  py-md-5 justify-content-center">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="d-flex align-items-center justify-content-center">
                            <img class="pres " :src="Pres" alt="presidents-img">
                        </div>
                        <div >
                            <!-- position -->
                            <p class="m-0 presd">Nweke favour Samuel</p>
                        </div>
                        <p class="m-0 text-center fw-semibold">President</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 my-md-0 my-3">
                        <div class="d-flex align-items-center justify-content-center">
                            <img class="pres" :src="Vice" alt="vp">
                        </div>
                        <div>
                            <p class="m-0 presd">Okonmah Raphael</p>
                        </div>
                        <p class="m-0 text-center fw-semibold">Vice President</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 my-md-3 my-3">
                        <div class="d-flex align-items-center justify-content-center">
                            <img class="pres" :src="Fin" alt="Finsec">
                        </div>
                        <div>
                            <p class="m-0 presd">Ifeanyi Success</p>
                        </div>
                        <p class="m-0 text-center fw-semibold">Treasurer</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="d-flex align-items-center justify-content-center">
                            <img class="pres" :src="ICT" alt="ICT_exco">
                        </div>
                        <div>
                            <p class="m-0 presd">Paul .C. Priscilla</p>
                        </div>
                        <p class="m-0 text-center fw-semibold">Asst. Secretary</p>
                    </div>   
                </div>
                <div class="d-flex justify-content-end p-md-2 p-4 align-items-center">
                    <router-link to="/executives" class="d-flex text-decoration-none text-black flex-row align-items-center gap-2 rounded-sm bg-white px-3 py-2 border border-white border-solid"><p class="d-flex m-0 align-items-center gap-1">See all executives</p>
                        <i class='bx fs-5 bx-chevron-right'></i></router-link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
    
</style>