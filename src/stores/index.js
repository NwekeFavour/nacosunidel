import { createStore } from 'vuex';
import Pres from '../assets/image/pres.webp';
import Fin from '../assets/image/finsec.webp';
import Vice from '../assets/image/vice.webp';
import ICT from '../assets/image/It.webp';
import Sec from '../assets/image/sec.webp';
import DOS from '../assets/image/dos.webp';
import PRO from '../assets/image/pro.webp';

export default createStore({
  state: {
    Executives: [
      { image: Pres, id: 0, position: "President", name: "Nweke Favour Samuel" },
      { image: Vice, id: 1, position: "Vice President", name: "Okonmah Raphael" },
      { image: Sec, id: 2, position: "Secretary", name: "Amos Dominion" },
      { image: ICT, id: 3, position: "Asst. Secretary", name: "Paul .C. Priscilla" },
      { image: DOS, id: 4, position: "Director of Socials", name: "Oluchukwu .O. Divine" },
      { image: Fin, id: 5, position: "Financial Secretary", name: "Ifeanyi Success" },
      { image: PRO, id: 6, position: "PRO", name: "Emmanuel .P. Chiemezie" },
    ],
  },
});
