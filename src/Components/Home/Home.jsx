import { React, require } from "react";
import ImgMe from '../../assets/DuncanAtSilverstone.jpg';

// - my brand statement
// - An indication that this site is a portfolio of my work
function Home() {
  return (
    // <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-3" id="aboutme">
          <h2>About Me</h2>
        </div>
        <div className="col-9">
          <img
            src={ImgMe}
            alt="Duncan at Silverstone"
            className="aboutMeImg"
          ></img><br></br>
          <p>I'm Duncan, and welcome to my coding portfolio.</p>
          <p>
            I've always worked in IT, starting on the EPOS helpdesk for an
            electrical retailer. I jumped into development and started coding in
            dBaseII (for a helpdesk call logging system), then Today 4GL for a
            service department system, and then Progress 4GL for a POS system
          </p>
          <p>
            My career took a strange turn when I became an implementation
            consultant for a software company. This involved not only coding the
            product, but performing requirements gathering, business process
            analysis, implementation and training. From this point forwards I
            was then a business analyst.
          </p>
          <p>
            Following some retraining, I'm now a front-end web developer and
            technical business analyst with a life-long curiosity as to why
            things work and why they don’t. Solutions to problems aren’t always
            obvious, and I always try to think outside of the box. Strengths in
            teamwork, investigating issues, requirements gathering and
            stakeholder management. Accessibility is a must.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
