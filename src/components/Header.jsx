import React from "react"

import * as styles from "./header.module.css"

import Video from "../assets/082715.mp4"

const Header = () => (
  <>
    <header className={styles.header}>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          I'm Oscar, <small>a Web Developer</small>
        </h1>
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            src={Video}
            autoPlay
            loop
            muted
            type="video/mp4"
          />
        </div>
      </div>
    </header>
  </>
)

export default Header
