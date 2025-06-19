import project1 from '../assets/img/project1.png';
import project1Detail1 from '../assets/img/project1Detail1.png';
import project1Detail2 from '../assets/img/project1Detail2.png';
import project1Detail3 from '../assets/img/project1Detail3.png';
import project1Detail4 from '../assets/img/project1Detail4.png';
import project1Detail5 from '../assets/img/project1Detail5.png';
import project1Detail6 from '../assets/img/project1Detail6.png';
import project1Detail7 from '../assets/img/project1Detail7.png';
import project1Detail8 from '../assets/img/project1Detail8.png';
import project1Detail9 from '../assets/img/project1Detail9.png';
import project2 from '../assets/img/project2.png';
import project2Detail1 from '../assets/img/project2Detail1.png';
import project2Detail2 from '../assets/img/project2Detail2.png';
import project3 from '../assets/img/project3.png';
import project3Detail1 from '../assets/img/project3Detail1.png';
import project3Detail2 from '../assets/img/project3Detail2.png';
import project3Detail3 from '../assets/img/project3Detail3.png';

export const projectsData = [
  {
    id: 1,
    title: "Custom ERP System for the Food & Beverage (F&B) Industry",
    shortDesc: "A modular ERP system for managing inventory, production, distribution, and sales across F&B departments.",
    images: [
        project1,
        project1Detail1,
        project1Detail2,
        project1Detail3,
        project1Detail4,
        project1Detail5,
        project1Detail6,
        project1Detail7,
        project1Detail8,
        project1Detail9,
    ],
    longDesc: "This project involved developing a custom ERP system tailored for a Food & Beverage (F&B) company. The system features role-based access control, approval workflows, internal inventory requests, production tracking, outlet distribution, daily cashier authorization, and sales reporting. A key business goal was to allow the business owner to monitor all operations—from raw material movement to final sales—via a real-time dashboard. Designed to streamline cross-department collaboration, the system improves traceability, accountability, and operational efficiency.",
    technologies: ["HTML5", "CSS3", "MySQL", "JWT Auth", "PHP", "JS"],
    client: "Umami Dimsum",
    year: "2025",
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Human Creation Process – Science & Islamic Perspective",
    shortDesc: "An educational website explaining the human creation process through Islamic and scientific views.",
    images: [
        project2,
        project2Detail1,
        project2Detail2,
    ],
    longDesc: "This project is a web-based educational platform that illustrates the stages of human creation based on both Islamic teachings and scientific explanations. It includes animated sections, smooth scrolling navigation, pop-up explanations, and visual elements to enhance user experience. The project aims to help students or general users understand complex concepts through interactive and aesthetic web design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Scroll Animation", "Popup Modal"],
    client: "Academic Assignment",
    year: "2025",
    liveLink: "https://ysnrw.github.io/proses-penciptaan-manusia/",
    repoLink: "https://github.com/ysnrw/proses-penciptaan-manusia.git"
  },
  {
    id: 3,
    title: "Disease Prediction Interface",
    shortDesc: "A user-friendly web interface for predicting disease probability based on symptoms.",
    images: [
        project3,
        project3Detail1,
        project3Detail2,
        project3Detail3,
    ],
    longDesc: "This project is a front-end web interface prototype designed for a disease prediction tool. It allows users to input various symptoms and receive predictive feedback. While the current version is front-end only, it’s structured to easily integrate with a future machine learning model or API. The goal was to design a clean, intuitive form for medical screening support, especially in community health contexts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation"],
    client: "Personal Project",
    year: "2025",
    liveLink: "https://ysnrw.github.io/prediksi_penyakit/",
    repoLink: "https://github.com/ysnrw/prediksi_penyakit.git"
  }
];