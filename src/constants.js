// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import gristip from './assets/company_logo/gristip.jpg';
import IT from "./assets/IT_VEDANT.jpg"

// Education Section Logo's
import board from './assets/education_logo/board.png';
import kksuLogo from './assets/education_logo/kksu.png';

// Project Section Logo's
import progress from "./assets/work_logo/progress.png";
import weather from "./assets/work_logo/weather.png";
import animeverse from "./assets/work_logo/animeverse.png";
import texttovoice from "./assets/work_logo/text_to_speech.png";
import note from "./assets/work_logo/note.png";
import randomuser from "./assets/work_logo/randomuser.png";
import currency from "./assets/work_logo/currency.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gristip,
      role: "Fullstack Web Development",
      company: "Gristip Private Limited",
      date: "July 2025 - September 2025",
      desc: "Developed dynamic and scalable web applications and handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Python",
        "Tailwind CSS",
        "MySql",
       
      ],
    },
    {
      id: 1,
      img: IT,
      role: "Java Fullstack Developer Intern",
      company: "IT VEDANT",
      date: "NOV 2025 - Present",
      desc: "Worked on multiple projects involving Java, Spring Boot for backend development, and React.js for frontend development. Gained hands-on experience in building full-stack applications, implementing RESTful APIs, and managing databases.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Java",
        "Material UI",
        "Spring Boot",
        "React JS",
        "MySQL",
        "Git",
        "Spring",
        "PostMan"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: kksuLogo,
      school: "Kavikulaguru Kalidas Sanskrit University  ",
      date: "July 2023 - May 2026",
      grade: ".....",
      desc: "I have completed my Bachelors degree in Computer Application (BCA)  from Kavikulaguru Kalidas Sanskrit University, Ramtek. During my time at KKSU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Kavikulaguru Kalidas Sanskrit University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors Of Computer Application - BCA",
    },
    
      
    {
      id: 1,
      img: board,
      school: "Shri Venkat Reddy Junior College , Kodamendhi",
      date: "June 2020 - March 2021",
      grade: "80%",
      desc: "I completed my class 12 education from Shri Venkat Reddy Junior (SVRJ) College, Kodamendhi , under the State board, where I studied Physics, Chemistry, Biology and Mathematics. where I secured 80% in my HSC examination. During my time at SVRJ College, I actively participated in various extracurricular activities and academic competitions, which helped me develop a well-rounded skill set and a strong foundation for my future academic and professional endeavors.",
      degree: "HSC (XII) - PCMB ",
    },
    {
      id: 2,
      img: board,
      school: "Zilla Parishad High School  , Kodamendhi",
      date: "Apr 2018 - March 2019",
      grade: "64.20%",
      desc: "I completed my class 10 education from Zilla Parishad High School, Kodamendhi , under the state board, where I studied all the subjects and secured 64.20% in my SSC examination.",
      degree: "SSC (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AnimeVerse",
      description:
        "Bootstrap, featuring a modern UI, organized layouts, and mobile-friendly design to showcase anime content in an attractive and user-centric manner",
      image: animeverse,
          tags: [ "HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/riyakarunde/AnimeVerse",
      webapp: "https://anime-verse-orcin.vercel.app/",
    },
    {
      id: 1,
      title: "Weather App",
      description:
        "A comprehensive weather forecasting web application built with React.js. It provides real-time weather updates, 7-day forecasts, and interactive maps. Users can search for any location worldwide to get accurate weather information, making it a reliable tool for planning daily activities.",
      image: weather,
      tags: ["React JS","API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/weather-app",
      webapp: "https://weather-app-kappa-eight-81.vercel.app/",
    },
    {
      id: 2,
      title: "Progress Bar",
      description:
        "A simple and interactive Progress Bar application built using React JS, HTML, CSS, and JavaScript to visually display task completion progress in a clean user interface.",
      image: progress,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/PROGRESSBAR",
      webapp: "https://progressbar-kappa-six.vercel.app/",
    },
    {
      id: 3,
      title: "Text to speech Converter",
      description:
        "A simple and interactive Progress Bar application built using React JS, HTML, CSS, and JavaScript to visually display task completion progress in a clean user interface.",
      image: texttovoice,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/Text-To-Speech-Converter",
      webapp: "https://text-to-speech-converter-blush.vercel.app/",
    },
    {
      id: 4,
      title: "Note App",
      description:
        "A simple and interactive Note Application that use to create a sticky notes where we can create a note and change colour of box from colour palate and make text bold , italic , black and white . I build this with HTML, CSS, and JavaScript to visually display Note.",
      image: note,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/Note_app",
      webapp: "https://note-app-a6z1.vercel.app/",
    },
    {
      id: 5,
      title: "Random User Generator",
      description:
        "A simple and interactive Random User Generator application built with React.js. It fetches random user data from a REST API and displays it in a clean, responsive UI.",
      image: randomuser,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/random_user",
      webapp: "https://random-user-azure-two.vercel.app/",
    },
    {
      id: 6,
      title: "Currency Converter",
      description:
        "A simple and interactive Currency Converter application built with HTML, CSS, JavaScript and restful API. It fetches real-time exchange rates from a REST API and displays them in a clean, responsive UI.",
      image: currency,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/riyakarunde/currecy_converter",
      webapp: "https://currecy-converter-jade.vercel.app/",
    },
  ];  