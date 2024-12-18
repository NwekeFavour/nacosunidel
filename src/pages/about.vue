<template>
  <div>
    <Header/>
    <div class="about-container">
      <div class="top-image">
        <h2>UNIDEL</h2>
      </div>
      <div class="we-are-section p-md-5 p-3">
        <h1>Who we are</h1>
        <p>
          The Nigerian Association of Computing Students (NACOS) at the
          University of Delta is a student organization dedicated to fostering
          the growth and development of computer science, cybersecurity,
          information and communication technology and software engineering
          students. We provide a platform for networking, learning, and
          professional development through a range of events, workshops, and
          activities. Our members have the opportunity to enhance their
          technical skills, engage in hands-on projects, and stay up-to-date
          with industry trends. We organize coding competitions, hackathons, and
          seminars led by industry experts to showcase talent and provide
          real-world insights.
        </p>
      </div>
      </div>
      <div class="departments-section">
        <h1>Our Departments</h1>
      </div>
    <div class="departments-nav ">
      <div
        v-for="dept in departments"
        :key="dept.id"
        class="dept-nav-holder "
      >
        <button
          @click="setActiveButton(dept.id)"
          :class="{'active-button': activeButton === dept.id, 'inactive-button': activeButton !== dept.id}"
          class="dept-nav-buttons"
        >
        </button>
          {{ dept.code }}

      </div>
    </div>
    <div v-if="activeDepartment" class="dynamic-dept">
      <div class="my-md-3 mx-md-5 mx-3 my-3">
        <p class="m-0 text-secondary fs-3 fw-semibold">Departments</p>
      </div>
      <div class="dept-text-area my-md-2 my-3  d-flex align-items-center justify-content-center ">
        <p class="dept-title d-flex m-0 justify-content-start fw-bold">{{ activeDepartment.name }}</p>
        <p class="dept-info text-wrap mx-md-3 mx-2">{{ activeDepartment.info }}</p>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { ref, computed } from 'vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const departments = [
      { id: 1, code: 'CSC', name: 'Computer Science', info: 'The Department of Computer Science offers a comprehensive academic program focusing on the principles and practices of computing. From theoretical foundations to practical applications, students delve into algorithms, data structures, artificial intelligence, and more, preparing them for diverse career paths in technology.' },
      { id: 2, code: 'SWE', name: 'Software Engineering', info: 'The Software Engineering department focuses on the systematic development and application of techniques for the creation of high-quality software systems. Students learn about software design, development, testing, and maintenance, equipping them with the skills needed in the software industry.' },
      { id: 3, code: 'CYB', name: 'Cyber Security', info: 'The Cybersecurity department is dedicated to the study of protecting systems, networks, and programs from digital attacks. Students gain knowledge in areas such as cryptography, network security, and risk management, preparing them to safeguard information in various organizations.' },
      { id: 4, code: 'LIS', name: 'Library and Information Science', info: 'The Library and Information Science department focuses on the management and dissemination of information. Students learn about information organization, digital libraries, and information retrieval systems, preparing them for careers in information management.' }
    ];

    const activeButton = ref(departments[0].id);

    const setActiveButton = (id) => {
      activeButton.value = id;
    };

    const activeDepartment = computed(() => {
      return departments.find(dept => dept.id === activeButton.value);
    });

    return {
      departments,
      activeButton,
      setActiveButton,
      activeDepartment
    };
  }
};
</script>

<style scoped>

.active-button {
  background-color: #010124; /* Active background color */
  color: white;
}

.inactive-button {
  background-color: #f8f9fa; /* Inactive background color */
  color: black;
}

</style>
