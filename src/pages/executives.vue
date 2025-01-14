<script >
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

    export default {
        components: {
            Header,
            Footer
        },
        computed: {
            Executives() {
                return this.$store.state.Executives || [];
            },
            StudentsRep() {
                return this.$store.state.StudentExecutives || []
            },
            StaffsAdvisers() {
                return this.$store.state.StaffsAdvisers || []
            }
        }
    }
</script>

<template>
    <div>
        <Header />
        <div class="section-title border-2 border-start m-3  ps-3 border-success mb-75">
            <h2 class="fw-bold">MEET THE <span class="text-success fw-semibold">TEAM</span></h2>
            <p>1st NACOS UNIDEL Chapter Executives </p>
            <p></p>
        </div>
        <div class="executivess">
            <div class="mx-auto row py-4   d-lg-flex align-items-center  py-md-5 justify-content-center">
                <div v-for="item in Executives" class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres " :src="item.image" :alt="item.position" />
                    </div>
                    <div>
                        <!-- position -->
                        <p class="m-0 presd">{{item.name}}</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">{{item.position}}</p>
                </div>

                <!-- <div class="col-lg-3 col-md-6 col-12 my-md-0 my-3">
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
                        <img class="pres" :src="Fin" alt="finsec">
                    </div>
                    <div>
                        <p class="m-0 presd">Ifeanyi Sucess</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Treasurer</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="Sec" alt="Secretary">
                    </div>
                    <div>
                        <p class="m-0 presd">Amos Dominion</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Secretary</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="ICT" alt="ICT">
                    </div>
                    <div>
                        <p class="m-0 presd">Paul .C. Prescilia</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Asst. Secretary</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="DOS" alt="dos">
                    </div>
                    <div>
                        <p class="m-0 presd">Oluchukwu .O. Divine</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">Director of Socials</p>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres" :src="PRO" alt="pro">
                    </div>
                    <div>
                        <p class="m-0 presd">Emmanuel .P. Chiemezie</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">PRO</p>
                </div> -->
            </div>
            <div class="section-title border-2 border-start m-3  ps-3 border-success mb-75">
                <h3 class="fw-bold">MEET THE <span class="text-success fw-semibold">STUDENT LEGISLATIVE </span>COUNCIL
                </h3>
            </div>
            <div class="mx-auto row py-4   d-lg-flex align-items-center  py-md-5 justify-content-center">
                <div v-for="item in StudentsRep" class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres " :src="item.image" :alt="item.position" />
                    </div>
                    <div>
                        <!-- position -->
                        <p class="m-0 presd">{{ item.name }}</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">{{ item.position }}</p>
                </div>
            </div>
            <div class="section-title border-2 border-start m-3  ps-3 border-success mb-75">
                <h3 class="fw-bold">MEET THE <span class="text-success fw-semibold">STAFF ADVISERS </span>
                </h3>
            </div>
            <div class="mx-auto row py-4   d-lg-flex align-items-center  py-md-5 justify-content-center">
                <div v-for="item in StaffsAdvisers" class="col-lg-3 col-md-6 col-12">
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="pres " :src="item.image" :alt="item.position" />
                    </div>
                    <div>
                        <!-- position -->
                        <p class="m-0 presd">{{ item.name }}</p>
                    </div>
                    <p class="m-0 text-center fw-semibold">{{ item.position }}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
    
</style>