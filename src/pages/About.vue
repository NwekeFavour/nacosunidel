<template lang="">
    <div class="about-container">
      <div class="top-image">
        <h2>UNIDEL</h2>
      </div>
      <div class="we-are-section">
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
      <div class="departments-section">
        <h1>Our Departments</h1>
        <div class="departments-nav">
          <div class="dept-nav-holder">
            <div class="dept-nav-buttons csc-button active" onclick="changeColor(this)">
            </div>
            <p>CSC</p>
          </div>
          <div class="dept-nav-holder">
            <div class="dept-nav-buttons swe-button" onclick="changeColor(this)">
            </div>
            <p>SWE</p>
          </div>
          <div class="dept-nav-holder">
            <div class="dept-nav-buttons cyb-button" onclick="changeColor(this)">
            </div>
            <p>CYB</p>
          </div>
          <div class="dept-nav-holder">
            <div class="dept-nav-buttons lis-button" onclick="changeColor(this)">
            </div>
            <p>LIS</p>
          </div>
        </div>
        <h3 class="depts-heading">Departments</h3>
        <div class="dynamic-dept">
          <div class="dept-text-area">
            <p class="dept-title">Computer Science</p>
            <p class="dept-info">
              The Department of Computer Science offers a comprehensive academic
              program focusing on the principles and practices of computing.
              From theoretical foundations to practical applications, students
              delve into algorithms, data structures, artificial intelligence,
              and more, preparing them for diverse career paths in technology.
            </p>
          </div>
          <div class="dept-image-sec"></div>
        </div>
        <div class="vision-and-mission">
            <div class="VM-statements">
                <h3>Vision Statement</h3>
                <p>Our vision for NACOS is to empower future innovators in the field of computer science, nuturing problem solvers and critical thinkers.
                    we aspire to create a global network of connected professionals, fostering collaboration and idea exchange.
                </p>
            </div>
            <div class="VM-statements">
                <h3>Mission Statement</h3>
                <p>NACOS is dedicated to fostering academic excellence among computing students in various departments, providing resources and support systems to enhance learning. 
                    We are committed to facillitating professional development through skill-building.
                </p>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import '../assets/styles/index.css'

</script>
