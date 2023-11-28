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
  subTitle: emoji("🌟 Seeking an environment where work is pure fun! Always embracing positivity in every aspect of life, even in the face of challenges. 🚀"),
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
  subTitle: "Passionate Data Scientist | Machine Learning Engineer | Freelancer",
  skills: [
    emoji("⚡ Developed a Chat Bot with NLP deployed using Deep Learning"),
    emoji(
      "⚡ Progressive Power BI dashboards for college and CCC, Gandhinagar"
    ),
    emoji("⚡ Integration of Machine Learning model with web frameworks(API)"),
    emoji("⚡ Implemented predictive models for Pension Classification using ML"),
    emoji("⚡ Constructed Dropout/Migration Analysis Dashboard with Power BI"),
    emoji("⚡ Proficient in analyzing and visualizing complex data sets"),
    emoji("⚡ Strong background in statistical analysis and hypothesis testing")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
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
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "60%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Visualization (Power BI)",
      progressPercentage: "65%"
    },
    {
      Stack: "Statistical Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
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
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME IDEAS WHICH WILL BE EVOLVING INTO SOMETHING NEW",
  subtitle: "Check out some of my impactful projects in the field of Machine Learning and Data Science:",
  
  projects: [
    {
      image: require("./assets/images/chat.png"),
      projectName: "Med Bot",
      // projectDesc:
      //   "Medical assistance to everybody should be accessible at any time without going to the medical offices. Our goal is to be able to give medical assistance to anyone who visits us by giving them suggestions for medicines, diet or booking an appointment with the nearby clinic",
      projectDesc:
      "Providing accessible medical assistance at any time, suggesting medicines, diet plans, and facilitating appointments through a chatbot. Utilized NLP and deployed using deep learning.",
    
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
      // projectDesc:
      //   "The emergence of Covid-19 caused a large shift to transfer from one place to another which raised the rate of dropout and migration to another level.Our aim is to visualize that Data in Power BI dashboard while generating a way to predicting the students drop-out scenario.",
      projectDesc:
      "Visualized and predicted student dropout scenarios using Power BI. Explored geospatial patterns and advanced analytics to understand migration trends.",
   
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
        "Implemented NLP to create a vocabulary for intents and developed a chatbot for medical assistance with a predefined set of responses based on user queries.",
     
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
        "Evaluated the performance of pretrained models (VGG19, AlexNet) for emotion detection using the EMOTIC dataset. Investigated effectiveness in classifying emotions depicted in images.",
      
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
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  subtitle:
  "Explore some of my notable achievements, certifications, and awards that showcase my expertise in Machine Learning and Data Science.",
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
