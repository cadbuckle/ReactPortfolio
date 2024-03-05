import "./Contact.css";

// Must have contact informatoin
// Must have a "contact" form with associated events
function ContactFooter() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">
                <a href="mailto:duncan.buckle@gmail.com">Duncan</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">GitHub</h5>
              <p className="card-text">
                <a href="https://www.github.com/cadbuckle" _target="GitHub">
                  My GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">LinkedIn</h5>
              <p className="card-text">
                <a
                  href="https://www.linkedin.com/in/duncanbuckle/"
                  _target="LinkedIn"
                >
                  My LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resume</h5>
              <p className="card-text">
                <a
                  href="https://drive.google.com/file/d/1sMZfAt0SHZbZ6oFIZGBLb6heQiermV5-/view?usp=sharing" _target="Resume"
                >
                  My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
