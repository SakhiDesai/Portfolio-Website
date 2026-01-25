import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sakhi Desai</h4>
      <h4>Copyright &copy; 2024 SD</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SakhiDesai" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sakhi-desai-11505a27b/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='sakhisdesai@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/SAKHI_DESAI/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer