import myPhoto from '../assets/img/myphoto.png';
import { faInstagram, faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const homeData = {
  name: "Yusuf Nurwahid",
  title: "Full Stack Developer",
  intro: "I am a passionate frontend and backend developer with expertise in creating interactive, responsive and easy-to-use web applications. I love turning ideas into reality through code.",
  profileImage: myPhoto,
  buttons: [
    {
      text: "Hire Me",
      href: "#contact"
    },
    {
      text: "Let's Talk",
      href: "#contact"
    }
  ],
  socials: [
    {
      href: "https://www.instagram.com/ysnrw_",
      icon: faInstagram,
      delay: '1.3s'
    },
    {
      href: "https://wa.me/6281212014518",
      icon: faWhatsapp,
      delay: '1.5s'
    },
    {
      href: "https://www.linkedin.com/in/yusuf-nurwahid-b7982a300?",
      icon: faLinkedinIn,
      delay: '1.7s'
    },
    {
      href: "https://github.com/ysnrw",
      icon: faGithub,
      delay: '1.9s'
    }
  ]
};