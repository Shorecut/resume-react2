import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const About = () => {
  return (
    <div>
      <h2 className="about_title">MY SKILLS</h2>
      <div className="mt-5 about_block">
        <div className="skill_block">
          <ProgressBar variant="success" now={90} />
          <p>Html</p>
        </div>
        <div className="skill_block">
          <ProgressBar className="mt-5" variant="info" now={30} />
          <p>React</p>
        </div>
        <div className="skill_block">
          <ProgressBar className="mt-5" variant="warning" now={90} />
          <p>Css</p>
        </div>
        <div className="skill_block">
          <ProgressBar className="mt-5" variant="danger" now={80} />
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default About;
