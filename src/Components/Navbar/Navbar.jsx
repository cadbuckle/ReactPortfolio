import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setNavbar] = useState(false);

  const handleShowNavbar = () => {
    setNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Duncan Buckle</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          MENU
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
