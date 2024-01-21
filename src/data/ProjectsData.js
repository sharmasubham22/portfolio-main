import image1 from '../images/2shots_so.png';
import image2 from '../images/246shots_so.png';

const featured = [
  {
    title: "Stories",
    subHeading: "A Notebook App",
    description:
      "A notebook app created with M.E.R.N. stack technologies. Users can perform actions to create a new account, create notes, save notes, tag, edit note, and delete note. All user data will be stored securely in MongoDB database. ",
    technologies: ["Node.js", "Express", "React", "MongoDB"],
    imgLink: image1,
    git: "https://github.com/sharmasubham22/notebook.git",
    demo: "https://mystories-app.netlify.app/",
    color: "#a89ee2",
  },
  {
    title: "Portfolio",
    subHeading: "My Work Portfolio",
    description:
      "A modern designed portfolio which showcases my work experiences, my projects, skills I have and much more. It highlight my capabilities which fulfills the requirement of the current trends in the industry. ",
    technologies: ["React", "Styled-Components", "Bootstrap"],
    imgLink: image2,
    git: "https://github.com/sharmasubham22/portfolio-main.git",
    demo: "/",
    color: "#8DADE2",
  },
];

const others = [
  {
    title: "Codepen-Clone",
    description:
      "A 'Codepen' clone which is useful and liberating online code editor for developers. It allows users to write code in the browser, and see the results of it as you build. Primary focus on front-end languages like HTML, CSS, JavaScript, ",
    technologies: ["React", "Code-Mirror"],
    git: "https://github.com/sharmasubham22/codepen-clone.git",
    demo: "https://cp-clone.netlify.app/",
  },
  {
    title: "News Guru",
    description:
      "News Guru is your source for daily news. You get all the breaking headlines at a glance based on the category you choose. Users get the news that are fetched from the news-API and displayed in a clean and informative structure. ",
    technologies: ["React", "NewsAPI", "Bootstrap"],
    git: "https://github.com/sharmasubham22/news_app",
    demo: "",
  },
  {
    title: "Halifax Foodie",
    description:
      "It is a multi-cloud based serverless food delivery system. It is designed using serverless technologies to process data. It provides customization feature, & additional services for restaurant owners, & limited services to customers.",
    technologies: ["AWS", "GCP", "Node.js", "React"],
    git: "https://github.com/sharmasubham22/halifax-foodie.git",
    demo: "",
  },
  {
    title: "Teacherly",
    description:
      "Teacherly is an android e-learning mobile application. Some key features include finding teachers near you, assignments creation, submission, grading. Used Kotlin as the programming language and android-studio. Data is stored in Firebase.",
    technologies: ["Kotlin", "Android", "Firebase"],
    git: "https://github.com/sharmasubham22/teacherly.git",
    demo: "",
  },
  {
    title: "Ride Share",
    description:
      "Ride Share is a car-pooling service application. It was completed following the design patterns and SOLID principles. Ride Share project helped with the strong understanding of OOPS concepts and Test-Driven Development. Deployed on Heroku.",
    technologies: ["Spring", "Java", "React", "Heroku"],
    git: "https://github.com/sharmasubham22/ride-share.git",
    demo: "",
  },
  {
    title: "Digi Soul",
    description:
      "Digi Soul is a web application that provides information and resources to individuals who are interested in technology. It serves as a one-stop-shop for all tech-related needs, including tech news, blogs, product-specifications, events etc.",
    technologies: ["Node.js", "Express", "React", "MongoDB"],
    git: "https://github.com/sharmasubham22/digi-soul.git",
    demo: "",
  },
  {
    title: "Find the labels",
    description:
      "Find the Labels is an image storage & analysis system which can store images, display them in a gallery and then detect the labels which can be found in an image selected by the user based on the confidence level they select.",
    technologies: ["AWS", "Cognito", "Rekognition", "Lambda"],
    git: "https://github.com/sharmasubham22/term-project/tree/main",
    demo: "",
  },
  {
    title: "Text-Utils",
    description:
      "Textutils application gives you a way to analyze text efficiently. Be it word count, character count or just get a preview of the formatted text. It is a free tool that provides instant character count & word count statistics for a given text.",
    technologies: ["React", "Bootstrap"],
    git: "https://github.com/sharmasubham22/text_utils",
    demo: "https://project-textutils.netlify.app/",
  },
];

export {featured, others};