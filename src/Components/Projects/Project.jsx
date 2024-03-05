import React from "react";
import "./Project.css";

// Receive data and display card with this data
// Utilize router propts to render the right project based on user selection
// render project title, link to deployed version, link to repo, screenshot
const renderLiveSite = (live) => {
  if (live) {
    return (
      <li>
        <strong>LIVE Site:</strong> {live}
      </li>
    );
  }
};
function Project(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.screenShot} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project:</strong> {props.title}
            </li>
            {renderLiveSite(props.liveURL)}
            <li>
              <strong>Git Repository:</strong> {props.gitRepo}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
