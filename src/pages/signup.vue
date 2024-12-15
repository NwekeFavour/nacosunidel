<script>
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import Error from '../components/404page.vue'
export default {
    data() {
        return{
            ditts: false
        }
    },
    components:{
        Header,
        Footer,
        Error
    }
}
</script>

<template>
    <div>
        <div v-if="ditts">
            <Header/>
            <div class="ps-md-3 pt-3 ps-2 pb-md-0 pb-2 pt-md-4">
                <p class="m-0 text-black fw-bold  fs-2">BECOME A MEMBER</p>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 my-4 mx-auto">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="fname" class="form-label">First name</label>
                                        <input required type="email" class="form-control w-full" id="fname" aria-describedby="fname">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="lname" class="form-label">Last name</label>
                                        <input required type="email" class="form-control w-full" id="lname" aria-describedby="lname">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Matric Number / Student ID</label>
                              <input required type="email" class="form-control w-full" id="exampleInputEmail1" aria-describedby="emailHelp">
                              <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input required type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3">
                                <label for="confirmpassword" class="form-label">Confirm Password</label>
                                <input required type="password" class="form-control" id="confirmpassword">
                              </div>
                            <div class="mb-5 form-check">
                                <input required type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <div class=" d-flex justify-content-center">
                                <button type="submit" class="btn w-75 btn-success ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
        <div v-else>
            <Error/>
        </div>
    </div>
</template>

<style>
    
</style>