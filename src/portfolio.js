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
  username: "GROWTHS",
  title: "Khi Lời Chúc Biết Lớn Lên 🌱",
  subTitle: emoji(
    "Chúng tôi mang đến thiệp giấy chứa đựng hạt giống, giúp bạn gửi gắm yêu thương và góp phần bảo vệ môi trường."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  youtube: "https://www.youtube.com/watch?si=rEhZ2zHyKxFsDzbR&v=Vn3WFc1TV-Q&feature=youtu.be",
  facebook: "https://www.facebook.com/le.yen.nhi.877248",
  instagram: "https://www.instagram.com/innhyyy_/",
  zalo: "https://zalo.me/0865967005",
  phone: "tel:0865967005",
 
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  display: false
};

// Education Section

const educationInfo = {
  display: false
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Tắt Work Experience
const workExperiences = {
  display: false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false
};
// Blogs Section

const blogSection = {
  display: false
};
// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Liên Hệ Growths ☎️"),
  subtitle: "Gửi gắm lời chúc yêu thương cùng chúng tôi! 💌",
  number: "0865 967 005",
  email_address: "Voduybao19052005@gmail.com" // Thêm email nếu có
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
