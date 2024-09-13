import React from "react"
import Block from "../Block"
import Section from "../Section"

import * as styles from "./styles.module.css"

const Banner = () => {
  return (
    <Block>
      <Section>
        <div className={styles.banner}>
          <h1>
            Senior Full Stack Developer with over a decade of hands-on
            experience
          </h1>
        </div>
      </Section>
    </Block>
  )
}

export default Banner
