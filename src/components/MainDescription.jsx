import React from "react"
import Laptop from "../assets/laptop.jpg"
import Block from "./Block"
import Section from "./Section"

const MainDescription = () => (
  <Block>
    <Section>
      <img src={Laptop} alt="Laptop on a desk" width="100%" height="auto" />
      <div>
        <span>
          Full Stack Developer with over a decade of experience, I specialize in
          creating JavaScript and PHP applications, leveraging both front-end
          and back-end frameworks. My expertise also includes cloud integrations
          and SQL database management. Additionally, I am proficient in modern
          development tools and practices such as version control (Git),
          continuous integration/continuous deployment (CI/CD), and agile
          methodologies.
        </span>
      </div>
    </Section>
    <Section>
      <div className="text-block">
        <span>
          Beyond technical skills, I possess strong problem-solving abilities,
          effective communication skills, and a collaborative mindset. I am
          adept at working in team environments, managing projects, and adapting
          to new technologies and challenges. My goal is to deliver
          high-quality, scalable solutions that meet client needs and drive
          business success.
        </span>
      </div>
      <img src={Laptop} alt="Laptop on a desk" width="100%" height="auto" />
    </Section>
  </Block>
)

export default MainDescription
