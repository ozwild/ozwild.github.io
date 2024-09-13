import React from "react"
import Block from "./Block"
import Section from "./Section"

const certifications = [
  "JavaScript",
  "Scrum Master",
  "Product Owner",
  "ReactJS",
  "GitHub & GitHub Actions",
  "Google Cloud",
]

const Certifications = () => (
  <Block>
    <Section>
      <h2>Certifications</h2>
      <ul>
        {certifications.map(cert => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </Section>
  </Block>
)

export default Certifications
