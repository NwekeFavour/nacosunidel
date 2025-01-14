import { createStore } from 'vuex';
import Pres from '../assets/image/pres.webp';
import Fin from '../assets/image/finsec.webp';
import Vice from '../assets/image/vice.webp';
import ICT from '../assets/image/It.webp';
import Sec from '../assets/image/sec.webp';
import DOS from '../assets/image/dos.webp';
import PRO from '../assets/image/pro.webp';
import Josh from '../assets/image/joshua.webp';
import Favour from '../assets/image/Amaechi.webp';
import DrOkpako from '../assets/image/Dr Okpako.webp'
import MrsMughele from '../assets/image/Mrs Mughele.webp'
import MrsDeborah from '../assets/image/Mrs Deborah.webp'
import XHOD from '../assets/image/Mr Dono.webp'

export default createStore({
  state: {
    Executives: [
      { image: Pres, id: 0, position: "President", name: "Nweke Favour .S." },
      { image: Vice, id: 1, position: "Vice President", name: "Okonmah Raphael" },
      { image: Sec, id: 2, position: "Secretary", name: "Amos Dominion" },
      { image: ICT, id: 3, position: "Asst. Secretary", name: "Paul .C. Priscilla" },
      { image: DOS, id: 4, position: "Director of Socials", name: "Oluchukwu .O. Divine" },
      { image: Fin, id: 5, position: "Financial Secretary", name: "Ifeanyi Success" },
      { image: PRO, id: 6, position: "PRO", name: "Emmanuel Chiemezie" },
    ],
    StudentExecutives: [
      { image: Josh, id: 0, position: "Faculty Rep", name: "Daigbe Joshua" },
      { image: Favour, id: 1, position: "Faculty Rep, Deputy Clerk", name: "Amaechi Favour" }
    ],
    StaffsAdvisers: [
      { image: DrOkpako, id: 0, position: "Dean, Faculty Of Computing", name: "Dr. Okpako Abugor" },
      { image: XHOD, id: 1, position: "Student Adviser", name: "Mr D.O. Okeh" },
      { image: MrsDeborah, id: 2, position: "HOD of Software Engineering", name: "" },
      { image: MrsMughele, id: 3, position: "HOD of Cyber Security", name: "Dr. (Mrs) E.S. Mughele" }
    ]
  },
});
