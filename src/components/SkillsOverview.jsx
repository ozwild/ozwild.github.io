import React from "react"

import Block from "./Block"
import Section from "./Section"

const skills = ["React", "Vue", "Typescript", "Laravel"]

const SkillsOverview = () => (
  <Block>
    <Section>
      <h2>Skills Overview</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  </Block>
)

export default SkillsOverview
