const cscButton = document.querySelector(".csc-button");
const sweButton = document.querySelector(".swe-button");
const cybButton = document.querySelector(".cyb-button");
const lisButton = document.querySelector(".lis-button");

const deptTitle = document.querySelector(".dept-title");
const deptInfo = document.querySelector(".dept-info");

function changeColor(element) {
    const allButtons = document.querySelectorAll('.dept-nav-buttons');
    allButtons.forEach(button => button.classList.remove('active'));
  
    element.classList.add('active');
  }
  
cscButton.addEventListener("click", ()=>{
    deptTitle.textContent="Computer Science";
    deptInfo.textContent="The Department of Computer Science offers a comprehensive academic program focusing on the principles and practices of computing. From theoretical foundations to practical applications, students delve into algorithms, data structures, artificial intelligence, and more, preparing them for diverse career paths in technology.";
});
sweButton.addEventListener("click", ()=>{

    deptTitle.textContent="Software Engineering";
    deptInfo.textContent="The Department of Software Engineering equips students with the knowledge and skills necessary to design, develop, and maintain high-quality software systems. Our curriculum emphasizes software development methodologies, programming languages, object-oriented design, and testing techniques, preparing graduates for successful careers in the software industry.";
});
cybButton.addEventListener("click", ()=>{
    deptTitle.textContent="Cyber Security";
    deptInfo.textContent="The Department of Cyber Security focuses on the protection of computer systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. Students learn about network security, cryptography, intrusion detection, incident response, and ethical hacking, preparing them to address the growing challenges of cybersecurity in today's digital world.";
});
lisButton.addEventListener("click", ()=>{
    deptTitle.textContent="Library and Information Science";
    deptInfo.textContent="The Department of Library and Information Science provides students with a comprehensive understanding of information organization, retrieval, and management. Our program covers topics such as library science, information technology, digital librarianship, and information literacy, preparing graduates for careers as librarians, information specialists, and knowledge managers";
});