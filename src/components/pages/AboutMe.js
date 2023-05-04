import React from "react";

function AboutMe() {
    return(
        <div className="aboutMe d-flex">
        <div>
        <img className="me" src={require("../../images/profile-picture.jpeg")} alt="me"></img>
        </div>
        <div className="w-75">
        <p className="">MERN stack web developer excited to pursue my new career as a software engineer while furthering my knowledge and honing my skills. I earned my training with the University of Pennsylvania through their Full Stack LPS coding bootcamp. I am a self-starting highly organized problem solver who works well collaborating with others. I excel under pressure and am passionate about developing responsive applications while helping others along the way. My strengths include creativity, teamwork, and being detail oriented.</p>
        <p className="">
        Through my most recent course I have learned from the ground up how to create my own PWA’s and single page web applications. I’ve made my own servers using Express and Node.js that I’ve used to connect the databases that I have made using MySQL. I’ve created my own RESTful APIs, and communicated with outside web APIs to make fast web apps that dynamically display a variety of information.</p>
        <p>
        The start of my career has been working in hospitality where I have learned how to adapt to any problem quickly under pressure, have clear concise communication skills, work well as a team, and meet goals in an extremely fast paced environment under high stress. I have worked my way up to management at every job I have had due to an organized and thorough work ethic. If you have a look at some of my work history in my resume section of this webapp you will see that I have maintained full time employment in higher ranking positions throughout my time in this field. </p>
        </div>
        </div>
    )
}

export default AboutMe