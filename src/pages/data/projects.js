import passwordGenerator from "../../assets/images/pwd-generator-screenshot.png";
import codeQuiz from "../../assets/images/quiz-screenshot.png";
import workDayScheduler from "../../assets/images/workday-scheduler-screenshot.png";
import weatherForecast from "../../assets/images/weather-forecast-screenshot.png";
import furballFinder from "../../assets/images/furball-screenshot.png";
import noteTaker from "../../assets/images/note-taker.png";
import employeeTracker from "../../assets/images/employee-tracker.png";
import financeHandler from "../../assets/images/finance-handler.png";
import techBlog from "../../assets/images/tech-blog.png";
import pwaTextEditor from "../../assets/images/pwa-text-editor.png";

// This data is using to show all the projects using the Project component
const projectData = [
  {
    imageSrc: passwordGenerator,
    title: "Password Generator",
    description:
      "This project is about a password generator webpage which randomly generates a password that meets certain criteria. For the criteria, user can select a length of at least 8 characters and no more than 128 characters for the password. They can also choose whether or not to include lowercase, uppercase, numeric, and/or special characters.",
    github: "https://github.com/dpkashrestha/password-generator",
    deployed: "https://dpkashrestha.github.io/password-generator/",
  },
  {
    imageSrc: codeQuiz,
    title: "Code Quiz",
    description:
      "This is a code quizThis webpage is a timed javascript coding quiz with multiple-choice questions.",
    github: "https://github.com/dpkashrestha/javascript-code-quiz",
    deployed: "https://dpkashrestha.github.io/javascript-code-quiz/",
  },
  {
    imageSrc: workDayScheduler,
    title: "Work Day Scheduler",
    description:
      "This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    github: "https://github.com/dpkashrestha/work-day-scheduler",
    deployed: "https://dpkashrestha.github.io/work-day-scheduler/",
  },
  {
    imageSrc: weatherForecast,
    title: "Weather Forecast",
    description:
      "This is a weather widget dashboard where you can search your city to get the current and five day forecast.",
    github: "https://github.com/dpkashrestha/weather-dashboard",
    deployed: "https://dpkashrestha.github.io/weather-dashboard/",
  },
  {
    imageSrc: furballFinder,
    title: "Furball Finder",
    description:
      "Furball Finder allows users to search for a new pet in their area via: type, age, size and gender. After entering the desired information they will be shown results in their area via the Petfinder API and Google Maps API. They can then be given directions to their chosen pet!",
    github: "https://github.com/dpkashrestha/furball-finder",
    deployed: "https://firefoxflareon.github.io/Group-Project-1/",
  },
  {
    imageSrc: noteTaker,
    title: "Note Taker",
    description:
      "Note Taker application is used to write and save notes. This application will use an Express.js backend and will save and retrieve note data from a JSON file.",
    github: "https://github.com/dpkashrestha/note-taker",
    deployed: "https://dpka-note-taker.onrender.com/",
  },
  {
    imageSrc: employeeTracker,
    title: "Employee Tracker",
    description:
      "Employee Tracker is a CMS (Content Management System) to manage a company's employee data. It has a command-line interface that allows users to view, add, update or delete records from the database.",
    github: "https://github.com/dpkashrestha/employee-tracker",
  },
  {
    imageSrc: financeHandler,
    title: "Finance Handler",
    description:
      "The application is designed for users to easily add their income streams, as well as their expenditures allowing them to easily keeping track of their profits/losses/savings. The application also allows users to not only categorize expenditure, but also customize their calendar for better tracking of timelines alongside their cash flow.",
    github: "https://github.com/dpkashrestha/finance-handler",
    deployed: "https://finance-handlers.onrender.com/home",
  },
  {
    imageSrc: techBlog,
    title: "Tech Blog",
    description:
      "Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.This project is a CMS-style blog site, where developers can publish their blog posts and comment on other developer's posts as well.",
    github: "https://github.com/dpkashrestha/tech-blog",
    deployed: "https://dpka-tech-blog.onrender.com/",
  },
  {
    imageSrc: pwaTextEditor,
    title: "PWA Text Editor",
    description:
      "This app is a single-page application that meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.",
    github: "https://github.com/dpkashrestha/pwa-text-editor",
    deployed: "https://dpka-text-editor.onrender.com/",
  },
];

export default projectData;
