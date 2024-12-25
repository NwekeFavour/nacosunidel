<script>
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';
import Error from '../components/404page.vue'
import axios from 'axios';
export default {
    data() {
        return {
            Loader: true,
            ditts: false,
            fname: '',
            lname: '',
            matric_number: '',
            password: '',
            password_confirmation: '',
            error: '',
            message: '',
            isAuthenticated: localStorage.getItem('token') ? true : false, // Initialize based on token in localStorage

        }
    },
    components:{
        Header,
        Footer,
        Error
    },
    methods: {
    async handleRegister(event) {
        event.preventDefault();
        this.Loader = false

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          fname: this.fname,
          lname: this.lname,
          matric_number: this.matric_number,
          password: this.password,
          password_confirmation: this.password_confirmation
        });
          console.log('Registration successful:', response.data);
        this.isAuthenticated = true
        this.$router.push('/login'); // Redirect to login after successful registration
      } catch (error) {
        console.error('Registration failed:', error.response.data);
        this.message = error.response.data.message
      }
    },
    validateMatricNumber() {
      const regex = /^(CMP|SEN|LIS|CYB)[0-9]+$/;
      if (!regex.test(this.matricNumber)) {
        this.error = 'The matric number must start with CMP, SEN, LIS, or CYB followed by digits.';
      } else {
        this.error = '';
      }
    }
    },
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
                        <form @submit="handleRegister">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="fname" class="form-label">First name</label>
                                        <input v-model="fname" required type="text" class="form-control w-full" id="fname" aria-describedby="fname">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="lname" class="form-label">Last name</label>
                                        <input v-model="lname" required type="text" class="form-control w-full" id="lname" aria-describedby="lname">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Matric Number / Student ID</label>
                              <input @input="validateMatricNumber" v-model="matric_number" required type="text" class="form-control w-full" id="matric" aria-describedby="matricHelp">
                                <p v-if="error" style="color: red;">{{ error }}</p>

                              <div id="matricHelp" class="form-text">We'll never share your details with anyone else.</div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputPassword1" class="form-label">Password</label>
                              <input v-model="password" required type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3">
                                <label for="confirmpassword" class="form-label">Confirm Password</label>
                                <input v-model="password_confirmation
                                    " required type="password" class="form-control" id="confirmpassword">
                              </div>
                            <div class="mb-5 form-check">
                                <input required type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button v-if="Loader" type="submit" class="btn w-75 btn-success">Register</button>
                                <button v-else type="submit" class="btn w-75 btn-success">Loading.....</button>
                            </div>
                            <div v-if="message">
                                <p class="m-0 text-danger">
                                    {{ message }}
                                </p>
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