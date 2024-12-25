<script>
import axios from 'axios';
import Footer from '../components/footer.vue';
import Header from '../components/header.vue';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            matric_number: '',
            password: '',
            rememberMe: false,
            apiUrl: 'http://127.0.0.1:8000/api/login', // Replace with your API endpoint,
            isAuthenticated: true,
            isAuth:true,
            Loader: true,
            message: ''
        };
    },
    methods: {
        async handleLogin(event) {
            event.preventDefault();
            this.Loader = false
            try {
                const response = await axios.post(this.apiUrl, {
                    matric_number: this.matric_number,
                    password: this.password,
                    rememberMe: this.rememberMe,
                });

                
                console.log('Login successful:', response.data);
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                } else {
                    console.error('Token is missing from response data');
                }

                    if (response.data.is_special_admin) {
                        localStorage.setItem('isSpecialAdmin', true);
                        localStorage.setItem('token', response.data.token); // Store the token here
                        this.$router.push('/');
                        this.isAuthenticated= true
                        this.isAuth = true;
                    } else {
                        // Regular user login
                        localStorage.setItem('isSpecialAdmin', false);
                        localStorage.setItem('token', response.data.token);
                        this.isAuthenticated = true,
                        this.isAuth = false;  // Not an admin
                        this.$router.push('/')
                    }


                    // console.log('Response data:', response.data);
                    // console.log('Token stored:', localStorage.getItem('token'));

                // Handle successful login
                // For example: Redirect the user or save token to localStorage
            } catch (error) {
                console.error('Login failed:', error.response.data);
                this.message = error.response.data.message
                this.Loader = true
            }
        }
    }
};
</script>

<template>
    <div>
        <Header :isAuth="isAuth" :isAuthenticated="isAuthenticated"/>
        <div>
            <div class="ps-md-3 pt-3 ps-2 pt-md-4">
                <p class="m-0 text-black fw-bold fs-2">LOGIN</p>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 my-md-4 my-3 mx-auto">
                        <form @submit="handleLogin">
                            <div class="mb-3">
                                <label for="matricNumber" class="form-label">Matric Number / Student ID</label>
                                <input 
                                    v-model="matric_number" 
                                    required 
                                    type="text" 
                                    class="form-control w-full" 
                                    id="matricNumber" 
                                    aria-describedby="matricHelp"/>
                                <div id="vitals" class="form-text">
                                    We'll never share your details with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input 
                                    v-model="password" 
                                    required 
                                    type="password" 
                                    class="form-control" 
                                    id="password"/>
                            </div>
                            <div class="mb-5 form-check">
                                <input 
                                    v-model="rememberMe" 
                                    type="checkbox" 
                                    class="form-check-input" 
                                    id="rememberMe">
                                <label class="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button v-if="Loader" type="submit" class="btn w-75 btn-success">Login</button>
                                <button v-else type="submit" class="btn w-75 btn-success">Loading.....</button>
                            </div>
                            <div v-if="message" >
                                <p class="m-0 text-danger">
                                    {{ message }}
                                </p>
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
/* Add your styles here if needed */
</style>
