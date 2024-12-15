<script>
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';

export default {
    components:{
        Header,
        Footer
    }
}
</script>

<template>
    <div>
        <Header/>
        <div>
            <div class="ps-md-3 pt-md-4">
                <p class="m-0 text-black fw-bold  fs-2">LOGIN</p>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 my-md-4 mx-auto">
                        <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Matric Number / Student ID</label>
                              <input required type="email" class="form-control w-full" id="exampleInputEmail1" aria-describedby="emailHelp">
                              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input required type="password" class="form-control" id="exampleInputPassword1">
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
        </div>

        <Footer/>
    </div>
</template>

<style>
    
</style>