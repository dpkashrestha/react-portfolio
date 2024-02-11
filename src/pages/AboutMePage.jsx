import Avatar from "../assets/images/avatar.png";

function AboutMePage() {
  return (
    <>
      <div className="container page-header">
        <h1>About Me</h1>
      </div>
      <div className="container pt-4">
        <img src={Avatar} className="avatar"></img>
        <div className="about-me">
          <p>
            Welcome! I'm <strong>Dipika Shrestha</strong>, a passionate software
            developer on a journey of constant learning and innovation.
          </p>
          <p>
            Driven by a growing interest in software development, I am close to
            completing edX bootcamp with the University of Minnosota,
            specializing in full stack application development. This experience
            has been immensely rewarding, fueling my enthusiasm for creating
            impactful solutions.
          </p>
          <p>
            Through diverse projects showcased on my <i>Portfolio</i> page, I've
            demonstrated my proficiency in crafting dynamic web applications.
            From front-end interfaces to back-end systems, I thrive on tackling
            challenges and turning ideas into reality.
          </p>
          <p>
            My commitment to learning is unwavering. I'm dedicated to mastering
            new technologies and using my skills to solve complex real-world
            problems.
          </p>
          <p>
            Thank you for visiting my portfolio. Let's connect and explore how
            we can shape the future together through technology.
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutMePage;
