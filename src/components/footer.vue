<script>
    import Brand from '../assets/image/new.webp'
    import '../assets/styles.css'

    export default {
        data() {
            return {
                Brand : Brand
            }
        },
    }
</script>

<template>
    <div class="footer ">
        <div class="d-md-flex foots  justify-content-between">
            <div class="w-50 brd">
                <div class="mainbrd">
                    <img class="brand" :src="Brand" alt="">
                </div>
                <div class="w-500">
                    <p class="m-0 text-white ">
                        The Nigeria association of computing students UNIDEL chapter is an association of vibrant students of the faculty of computer science and the department of computer engineering , aimed at improving the technical and social well being of her members and bridge the gap between the academic environment and computer industry.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <ul class="list-unstyled links">
                        <div class="quickL">
                            <li class="text-uppercase text-white fw-bold  list-unstyled">
                                quick link
                            </li>
                        </div>
                        <li class="pt-3">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="py-3">
                            <router-link to="/login">Login</router-link>
                        </li>
                        <li class="pb-3">
                            <router-link to="/about-us">About</router-link>
                        </li>
                        <li class="pb-3">
                            <router-link to="/blog">Blog</router-link>
                        </li>
                        <li class="pb-3">
                            <router-link to="/executives">Executive</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <ul class="list-unstyled links">
                        <div class="quickL">
                            <li class="text-uppercase text-white fw-bold  list-unstyled">
                                more
                            </li>
                        </div>
                        <li class="pt-3">
                            <router-link class="text-capitalize" to="/past-questiions">past questions</router-link>
                        </li>                
                        <li class="pt-3">
                            <router-link class="text-capitalize" to="/events">events</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p class="m-0 text-white con">Contact</p>
            </div>
            <div>
                <ul class="list-unstyled links pt-2 contact">
                    <li>
                        <a class=" mb-3" href="mailto:nacosunidel@gmail.com">nacosunidel@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div>
                <div class="d-flex  socials gap-4 aligns-items-center">
                    <a href="https://www.tiktok.com/@nacosbowen" target="_blank" rel="noreferrer" class=" p-2  bg-white rounded">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z">                                
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/nacosbowen" target="_blank" rel="noreferrer" class="text-xl p-2 md:p-3 bg-white rounded">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">                                
                            </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/nacosbu" target="_blank" rel="noreferrer" class="text-xl p-2 md:p-3 bg-white rounded">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nacos-bowen-chapter-614a2625b/" target="_blank" rel="noreferrer" class="text-xl p-2 md:p-3 bg-white rounded">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">

                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="pt-4">
                <p class="m-0 text-white agb">Agbor, Delta State</p>
            </div>
        </div>
        <div class="hr mt-4"></div>
        <div class="pt-4">
            <p class="m-0 text-center uni text-white ">NACOS UNIDEL 2024/2025</p>
        </div>
    </div>
</template>

<style>
    
</style>