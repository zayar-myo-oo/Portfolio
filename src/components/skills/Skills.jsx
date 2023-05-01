import React from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import "./skills.css"

const Skills = () => {
  return (
    <div className="section skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technial level</span>
      <div className="skills__container container grid">
        <FrontEnd />
        <BackEnd/>
      </div>
    </div>
  )
}

export default Skills