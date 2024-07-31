import React from 'react'
import GenericSkill from '../GenericSkill/GenericSkill'
import './Skills.css'
function Skills() {
  return (
    <div className="skills">
      <h2>&lt;My Skills&gt;</h2>
      <div>
        <div className="skillsHeadings">
          <GenericSkill skillName="HTML"/>
          <GenericSkill skillName="CSS"/>
          <GenericSkill skillName="JS"/>
          <GenericSkill skillName="React JS"/>
          <GenericSkill skillName="Node JS"/>
          <GenericSkill skillName="Tailwind CSS"/>
          <GenericSkill skillName="GSAP"/>
        </div>
      </div>
    </div>
  )
}

export default Skills