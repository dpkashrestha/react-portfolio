import furballFinder from "../../assets/images/furball-screenshot.png";
import employeeTracker from "../../assets/images/employee-tracker.png";
import financeHandler from "../../assets/images/finance-handler.png";
import bookSearch from "../../assets/images/book-search.png";
import reduxStore from "../../assets/images/redux-store.png";
import chatBox from "../../assets/images/chat-box.png";

// This data is using to show all the projects using the Project component
const projectData = [
  {
    imageSrc: furballFinder,
    title: "Furball Finder",
    description:
      "Furball Finder allows users to search for a new pet in their area via: type, age, size and gender. After entering the desired information they will be shown results in their area via the Petfinder API and Google Maps API. They can then be given directions to their chosen pet!",
    github: "https://github.com/dpkashrestha/furball-finder",
    deployed: "https://dpkashrestha.github.io/furball-finder",
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
    imageSrc: bookSearch,
    title: "Book Search Engine",
    description:
      "This project builds a Google Books API search engine, which is integrated with a GraphQL API powered by Apollo Server. The application is constructed using the MERN (MongoDB, Express.js, React, Node.js) stack, with a React front end for the user interface, a MongoDB database for storing data, and a Node.js/Express.js server to handle API requests and responses.",
    github: "https://github.com/dpkashrestha/book-search-engine",
    deployed: "https://dpka-book-search-engine.onrender.com/",
  },
  {
    imageSrc: reduxStore,
    title: "E-commerce Platform",
    description:
      "The open-source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application. This project refactors an e-commerce platform that manages global state using React’s Context API to use Redux instead.",
    github: "https://github.com/dpkashrestha/redux-store",
    deployed: "https://dpka-redux-store.onrender.com",
  },
  {
    imageSrc: chatBox,
    title: "chat Box",
    description:
      "Chat-Box is a convenient messaging application developed for people who enjoy the social life, work life, and chatting with their peers. In this application, you will find that you can donate to a chairty of your choice once you land on the login/sign up page. Within, this same feature, if you are a returning quest, you can login and see that-like any other chat app. All of your conversations are stored, as pleased. In Chat-Box, you will find that not only can you be a social butterfly, but you can customize an avatar to display as your profile picture. As the developers, we hope you enjoy this app as much as we enjoyed creating it",
    github: "https://github.com/dpkashrestha/chat-box",
    deployed: "https://chat-box-e47q.onrender.com",
  },
];

export default projectData;
