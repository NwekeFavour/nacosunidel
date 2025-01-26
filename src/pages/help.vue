<template>
    <div>
        <Header />
        <div class="help-container">
            <div class="ps-md-3 pt-md-4 m-2">
                <p class="m-0 text-black fw-bold  fs-2">Send us a message</p>
                <div id="emailHelp" class="form-text">Need help with something? Fill the form below</div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 my-md-4 mx-auto">
                        <form>
                            <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Email Address</label>
                              <input required type="email" class="form-control w-full" id="exampleInputEmail1" aria-describedby="emailHelp">
                              <div id="emailHelp" class="form-text">We'll never share your details with anyone</div>
                            </div>
                            <div class="mb-3">
                              <label for="exampleInputSubject" class="form-label">Subject</label>
                              <select required type="email" class="form-control w-full" id="exampleInputSubject" aria-describedby="emailHelp">
                                <option value="disabled" selected disabled>-- Select an option --</option>
                                <option value="Unable to login">Unable to login</option>
                                <!-- <option value="Due payment">Due payment error</option> -->
                                <option value="Change of personal information">Change of personal information</option>
                                <option value="Password reset">Password reset</option>
                            </select>
                              <div id="emailHelp" class="form-text">Select an option which best describes your issue</div>
                            </div>
                            <div class="mb-3">
                              <label for="" class="form-label">Message</label>
                              <textarea required class="form-control help-message" id="" placeholder="Kindly provide additional information that could help us assist you better.">
                                </textarea>
                            </div>
                            <div class=" d-flex justify-content-center">
                                <button type="submit" class="btn w-75 dark-blue-btn mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: 'events',
    components: {
        Header,
        Footer
    },
}
</script>

<style scoped>
</style>