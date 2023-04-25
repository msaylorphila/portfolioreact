import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav>
          <ul className="d-flex justify-content-center">
            <li>
              <a className="nav-link" href="https://github.com/msaylorphila">
                <img
                  className="icon"
                  src={require("../images/github-icon.png")}
                  alt="github"
                ></img>
                <span className="sr-only"></span>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/margaret-saylor/"
              >
                <img
                  className="icon"
                  src={require("../images/linkedin-icon.png")}
                  alt="linkedin"
                ></img>
                <span className="sr-only"></span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://leetcode.com/msaylorphila/">
                <img
                  className="icon"
                  src={require("../images/leetcode.png")}
                  alt="leetcode"
                ></img>
                <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
