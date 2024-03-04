import React from "react";

// welcome/landing page containing
// - my name
// - my headshot
// - my brand statement
// - An indication that this site is a portfolio of my work
function Home() {
  return (
    <>
      <h2>This is the home</h2>
      <div className="container-fluid">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Hello, world!</h1>
            <p className="col-md-8 fs-4">I'm a jumbotron!</p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h3>Card title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">Card content</p>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header">
            <h3>Card title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">Card content</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
