/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Karrtik Baheti",
  title: "Hey, I'm Karrtik",
  subTitle: emoji("looking for an enivronment where work is all fun. Always looking for a positive aspect in every scenario in my life in every difficult situation"),
  resumeLink:
  "https://drive.google.com/file/d/1YqxssB4ve3tsexL9raAlYTpy0b_Ftz-s/view",  
  // "https://drive.google.com/file/d/1gvxMskuw4qOjjZMlmnPUXIWn-QtDWY6y/view?usp=sharing",
     // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/karrtik159",
  linkedin: "https://www.linkedin.com/in/karrtik-baheti",
  gmail: "karrtikbaheti159@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate ML Engineer | Data Scientist | Freelancer",
  skills: [
    emoji("⚡ Developed a Chat Bot with NLP deployed using Deep Learning"),
    emoji(
      "⚡ Progressive Power BI dashboards for college and CCC, Gandhinagar"
    ),
    emoji("⚡ Integration of Machine Learning model with web frameworks(API)")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ganpat University",
      logo: require("./assets/images/logo_2020.png"),
      subHeader:
        "Bachelor of technology in Computer engineering with specialization in AI",
      duration: "July 2019 - June 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Scientist",
      company: "Ganpat University",
      companylogo: require("./assets/images/logo_2020.png"),
      date: "Jan 2023 – May 2023",
      desc: "Emotion Recognition using different Deep Learning Techniques",
      descBullets: [
        "Conducted data preprocessing and feature engineering tasks.",
        "Developed Machine Learning models on different Deep learning architecture.",
        "Integrated Django or Flask as API services to handle backend operations."
      ]
    },
    {
      role: "Data Analyst",
      company: "Capgemini",
      companylogo: require("./assets/images/Capgemini.jpg"),
      // date: "May 2017 – May 2018",
      desc: "Analyst/A4"
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME IDEAS WHICH WILL BE EVOLVING INTO SOMETHING NEW",
  projects: [
    {
      image: require("./assets/images/chat.png"),
      projectName: "Med Bot",
      projectDesc:
        "Medical assistance to everybody should be accessible at any time without going to the medical offices. Our goal is to be able to give medical assistance to anyone who visits us by giving them suggestions for medicines, diet or booking an appointment with the nearby clinic",
      footerLink: [
        {
          name: "Med Bot",
          url: "https://github.com/karrtik159/MedBot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/powerbi.png"),
      projectName: "DropOut / Migration Analysis Dashboard",
      projectDesc:
        "The emergence of Covid-19 caused a large shift to transfer from one place to another which raised the rate of dropout and migration to another level.Our aim is to visualize that Data in Power BI dashboard while generating a way to predicting the students drop-out scenario.",
      footerLink: [
        {
          name: "Power BI Dashboard",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chat.png"),
      projectName: "Med-BOT(Chat BOT)",
      projectDesc:
        "The use of NLP in this repository for creating vocabulary based on your intents which is used to form a matchig pattern in your intents file and then from that particular tag the random response is predicted.",
      footerLink: [
        {
          name: "Med-BOT_ChatBOT",
          url: "https://github.com/karrtik159/Med-BOT_ChatBOT"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Face_Detection.png"),
      projectName: "Emotion detection",
      projectDesc:
        "The purpose of this project is to evaluate the performance of two pretrained models for emotion detection using the EMOTIC dataset. Emotion detection is crucial for understanding human behavior and enhancing human-computer interaction. By comparing pretrained models such as VGG19 and AlexNet, the project aims to determine their effectiveness in accurately classifying emotions depicted in images.",
      footerLink: [
        {
          name: "Flask_Face_detection",
          url: "https://github.com/karrtik159/Flask_Face_detection"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate",
      subtitle:"Data Analytics with Python – STTP organized by GUNI and GUJCOST-DST",
      image: require("./assets/images/Certificate.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1OS0ik7Hl82Kolw8frj9uAbAoDhsPN1p6/view?usp=sharing"
        }
      ]
    },
    {
      title: "Tensorflow Course",
      subtitle:"Deep Learning with Tensorflow",
      image: require("./assets/images/certificate-1.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1q-9GiyCr37LHgyTWCCew2me4P5eX6FKU/view?usp=sharing"
        }
      ]
    },
    {
      title: "Gujarat SSIP Hackathon Finalists",
      subtitle:"Azadi ka Amrit Mahotsav Hackathon-2022",
      image: require("./assets/images/Certificate-3.jpg"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9825656802",
  email_address: "karrtikbaheti159@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "KarrtikB", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  contactInfo,
  twitterDetails,
  isHireable
};
