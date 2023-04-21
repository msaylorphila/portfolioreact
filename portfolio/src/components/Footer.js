import React from "react";
// import "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"

function Footer() {
    return(
        <>
        <footer className="footer">
            <nav>

    <ul class="navbar-nav mr-auto d-flex flex-row">
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/msaylorphila">
            <img className="github" src="../../images/github-icon.png" alt="github"></img>
            <span class="sr-only"></span>
            </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/margaret-saylor/">
            <img className="icon" src="../../images/linkedin-icon.png" alt="linkedin"></img>
            <span class="sr-only"></span>
            </a>
      </li><li class="nav-item">
        <a class="nav-link" href="https://leetcode.com/msaylorphila/">
            <img className="icon" src="../../images/leetcode.png" alt="leetcode"></img>
            <span class="sr-only"></span>
            </a>
      </li>
    </ul>
    </nav>
 </footer>
</>
    )
}

export default Footer