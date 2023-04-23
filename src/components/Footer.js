import React from "react";
// import "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"

function Footer() {
  return (
    <>
      <footer className="footer fixed-bottom">
        <nav>
          <ul>
            <li>
              <a className="nav-link" href="https://github.com/msaylorphila">
                <img
                  className="github"
                  src="../../images/github-icon.png"
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
                  src="../../images/linkedin-icon.png"
                  alt="linkedin"
                ></img>
                <span className="sr-only"></span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://leetcode.com/msaylorphila/">
                <img
                  className="icon"
                  src="../../images/leetcode.png"
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
