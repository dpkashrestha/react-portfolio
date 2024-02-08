import Project from "../components/project";
import passwordGenerator from "../assets/images/pwd-generator-screenshot.png";
import codeQuiz from "../assets/images/quiz-screenshot.png";
import workDayScheduler from "../assets/images/workday-scheduler-screenshot.png";
import weatherForecast from "../assets/images/weather-forecast-screenshot.png";
import furballFinder from "../assets/images/furball-screenshot.png";
import noteTaker from "../assets/images/note-taker.png";
import employeeTracker from "../assets/images/employee-tracker.png";
import financeHandler from "../assets/images/finance-handler.png";
import techBlog from "../assets/images/tech-blog.png";
import pwaTextEditor from "../assets/images/pwa-text-editor.png";

function Portfolio() {
  return (
    <>
      <Project
        imageSrc={passwordGenerator}
        title="Password Generator"
        description="This is a password generator"
        github="https://github.com/dpkashrestha/password-generator"
        deployed="https://dpkashrestha.github.io/password-generator/"
      />

      <Project
        imageSrc={codeQuiz}
        title="Code Quiz"
        description="This is a code quiz"
        github="https://github.com/dpkashrestha/javascript-code-quiz"
        deployed="https://dpkashrestha.github.io/javascript-code-quiz/"
      />

      <Project
        imageSrc={workDayScheduler}
        title="Work Day Scheduler"
        description="This is a Work Day Scheduler"
        github="https://github.com/dpkashrestha/work-day-scheduler"
        deployed="https://dpkashrestha.github.io/work-day-scheduler/"
      />

      <Project
        imageSrc={weatherForecast}
        title="Weather Forecast"
        description="This is a weather Forecast"
        github="https://github.com/dpkashrestha/weather-dashboard"
        deployed="https://dpkashrestha.github.io/weather-dashboard/"
      />

      <Project
        imageSrc={furballFinder}
        title="Furball Finder"
        description="This is a furball Finder"
        github="https://github.com/dpkashrestha/furball-finder"
        deployed="https://firefoxflareon.github.io/Group-Project-1/"
      />

      <Project
        imageSrc={noteTaker}
        title="Note Taker"
        description="This is a note Taker"
        github="https://github.com/dpkashrestha/note-taker"
        deployed="https://dpka-note-taker.onrender.com/"
      />

      <Project
        imageSrc={employeeTracker}
        title="Employee Tracker"
        description="This is a employee Tracker"
        github="https://github.com/dpkashrestha/employee-tracker"
      />

      <Project
        imageSrc={financeHandler}
        title="Finance Handler"
        description="This is a finance handler"
        github="https://github.com/dpkashrestha/finance-handler"
        deployed="https://finance-handlers.onrender.com/home"
      />
      <Project />

      <Project
        imageSrc={techBlog}
        title="Tech Blog"
        description="This is a tech Blog"
        github="https://github.com/dpkashrestha/tech-blog"
        deployed="https://dpka-tech-blog.onrender.com/"
      />

      <Project
        imageSrc={pwaTextEditor}
        title="PWA Text Editor"
        description="This is a pwa Text Editor"
        github="https://github.com/dpkashrestha/pwa-text-editor"
        deployed="https://dpka-text-editor.onrender.com/"
      />
    </>
  );
}

export default Portfolio;
