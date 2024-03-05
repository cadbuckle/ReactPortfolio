import React from "react";
import Project from "../Projects/Project";
import projData from "../Projects/projects.json";

function Gallery() {
  return (
    <div className="container">
      <div className="row">
        {/* loop through projData and display 6 Projects */}{" "}
        {projData.map((proj) => (
          <Project
            key={proj.id}
            id={proj.id}
            title={proj.title}
            liveURL={proj.liveURL}
            gitRepo={proj.gitRepo}
            screenShot={proj.screenShot}
          />
        ))}
      </div>  {/*  row */}
    </div>  /* container */
  );
}

export default Gallery;
