import banner from "../assets/banner.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>

      <div className="about-content">

        <section>
          <h2>Summary</h2>
          <p>
          Full-Stack Developer with hands-on experience building scalable and responsive web applications using the MERN stack.
          Proficient in React.js, Node.js, Express.js, MongoDB, and RESTful APIs, with hands-on experience delivering real-world projects. Passionate about clean code, intuitive UI/UX, and solving complex problems through technology. Open to Full-Stack Developer roles where I can contribute to impactful products, collaborate with driventeams, and continue learning and growing in the tech space.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Executive PG Certification in Full Stack Development</strong> – IIIT Bangalore (2024 – Present)
            </li>
            <li>
              <strong>M.Tech in Mechanical Engineering</strong> – NIT Silchar (2018 – 2020)
            </li>
            <li>
              <strong>B.Tech in Mechanical Engineering</strong> – BPUT, Odisha (2012 – 2016)
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Languages: Java, C++, JavaScript, C#, Visual Basic</li>
            <li>Frontend: React, HTML, CSS, JavaScript, Material UI</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Tools: Git, Figma, SolidWorks, ANSYS</li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <ul>
            <li>
              <strong>Team Lead – Acharya Bharat Education Pvt. Ltd.</strong><br />
              Managed 5+ client projects with 30-member teams, improving delivery
              efficiency by 30% through Agile practices and proactive planning.
            </li>
            <li>
              <strong>Team Lead – GoAskNow Technology Pvt. Ltd.</strong><br />
              Oversaw SME training and delivery for major Chegg projects (SQnA, TBS, CAPP),
              implemented audit processes, and led content operations.
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Achievements</h2>
          <ul>
            <li>Best Team Player – Chegg SQnA & Live QnA Projects</li>
            <li>Excellence in Quality – Chegg TBS Project</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;