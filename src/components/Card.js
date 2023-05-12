import React from "react";

function Card({ project }) {
  const { name, githubLink, deployedLink, image, alt } = project;

  return (
    <div className="card col-lg-4">
      <img className="card-img-top" src={image} alt={alt} />
      <div className="card-body">
        <h2 className="card-text">{name}</h2>
        <a href={githubLink} alt={`${name} Github`}>
          {name} Github
        </a>
        <br />
        <a href={deployedLink} alt={`${name} deployed webpage`}>
          {name} Deployed Application
        </a>
      </div>
    </div>
  );
}

export default Card;