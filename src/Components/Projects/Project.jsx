import React from "react";
import "./Project.css";

// Receive data and display card with this data
// Utilize router propts to render the right project based on user selection
// render project title, link to deployed version, link to repo, screenshot
const renderScreenShot = (screen,title) => {
  if (screen) {
    return (<img alt={title} src={screen} />);
  } else {
    return (<img alt={title}  />);
  }
};

const renderLiveSite = (live, title) => {
  if (live) {
    return (
      <li className="content-btn">
        <a className="btn btn-primary" href={live} target={title} role="button">
          Live Site
        </a>
      </li>
    );
  }
};

const renderGitReport = (repo, title) => {
  if (repo) {
    const trgt = "repo" + title;
    return (
      <li className="content-btn">
        <a className="btn btn-primary" href={repo} target={trgt} role="button">
          Git Repo
        </a>
      </li>
    );
  }
};

function Project(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
      <div className="card">
        <div className="img-container">
          {renderScreenShot(props.screenShot, props.title)}
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project:</strong> {props.title}
            </li>
            {renderLiveSite(props.liveURL, props.title)}
            {renderGitReport(props.gitRepo, props.title)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
