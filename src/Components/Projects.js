import React from 'react';
import ProjectBox from './ProjectBox';
import EduWeb from '../images/EduWeb.png';
import SocialMedia from '../images/SocialMedia.png';
import FoodWeb from '../images/FoodWeb.png';
import ShortingVisualizer from '../images/ShortingVisualizer.png';
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EduWeb} projectName="EduWeb" />
        <ProjectBox projectPhoto={SocialMedia} projectName="SocioInsight" />
        <ProjectBox projectPhoto={FoodWeb} projectName="FoodBazar" />
        <ProjectBox projectPhoto={ShortingVisualizer} projectName="ShortingVisualizer" />
      </div>

    </div>
  )
}

export default Projects