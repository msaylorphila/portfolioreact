import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a
          href="#MSaylor"
          onClick={() => handlePageChange("MSaylor")}
          className={
            currentPage === "MSaylor"
              ? "nav-link active MSaylor"
              : "nav-link"
          }
        >
          <span id="MS">MS</span>aylor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <aside className="navbar-fixed-left">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                href="#aboutme"
                onClick={() => handlePageChange("AboutMe")}
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        </aside>
      </nav>
    </header>
  );
}

export default Navbar;