import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EduWebDesc : "Developed EduWeb (StudySight), an interactive online learning platform with a responsive frontend and real-time communication tools.",
    EduWebGithub : "https://github.com/SakhiDesai/EduWeb---a-studySight",
    EduWebWebsite : "https://sakhidesai.github.io/EduWeb---a-studySight/",

    SocioInsightDesc : "Developed a social media clone with a responsive React frontend, Node.js/Express.js backend, secure JWT-based authentication, and a MongoDB database.",
    SocioInsightGithub : "https://github.com/SakhiDesai/SocioInsight",
    // SocioInsightWebsite : "",

    FoodBazarDesc:"Developed a responsive food/restaurant website with dynamic features and a modern, user-friendly interface using HTML5, CSS3, and JavaScript.",
    FoodBazarGithub:"https://github.com/SakhiDesai/Food-Bazar---Restaurant-Website-Design",
    FoodBazarWebsite:"https://sakhidesai.github.io/Food-Bazar---Restaurant-Website-Design/",
    
    ShortingVisualizerDesc:"A web application that demonstrates the inner workings of various sorting algorithms through dynamic visualizations.",
    ShortingVisualizerGithub:"https://github.com/SakhiDesai/Sorting_Visualizer",
    ShortingVisualizerWebsite:"https://sakhidesai.github.io/Sorting_Visualizer/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox