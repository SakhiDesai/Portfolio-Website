import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          {/* <p>
            Hi, my name is <b>Sakhi Desai</b> and I am from Surat, Gujarat, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br /><br />
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            You can check out some of my work here <a href="https://www.linkedin.com/in/sakhi-desai-11505a27b/" target='_blank' rel="noreferrer">Linkedin</a>
          </p> */}
          <p>
            Hi, I’m <b>Sakhi Desai</b>, a <b>Software Engineer</b> based in Surat, Gujarat, India.
            I specialize in building scalable and user-centric web applications using the <b>MERN stack</b>, with a strong focus on clean code, performance, and intuitive UI/UX.
            <br /><br />

            Currently, I’m working as a <b>Full Stack Developer</b> at <b>Ultimate Business Solutions (Superworks) Pvt. Ltd.</b>, where I contribute to enterprise-level systems.
            My work includes developing features like attendance tracking, clock in/out, shift scheduling, along with integrating RESTful APIs and resolving complex UI/UX issues.
            <br /><br />

            I have a solid foundation in <b>Data Structures and Algorithms</b> and hands-on experience with <b>React.js, Node.js, Express.js, MongoDB</b>, and modern development tools like Git and GitHub.
            I enjoy transforming ideas into real-world applications and continuously improving product quality through collaboration and best development practices.
            <br /><br />

            I’m always open to learning, collaboration, and new opportunities where I can grow as a developer and add meaningful value.
            You can explore my work and connect with me on
            <a href="https://www.linkedin.com/in/sakhi-desai-11505a27b/" target="_blank" rel="noreferrer"> LinkedIn</a>.
          </p>

        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About