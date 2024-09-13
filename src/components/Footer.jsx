import React from "react"

const Footer = () => (
  <div style={styles.footer}>
    <p>
      Connect with me on{" "}
      <a
        href="https://gt.linkedin.com/in/ozwild"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </p>
    {/* @todo Move this section to a new credits component */}
    <p>
      This page's color palette is available at{" "}
      <a href="https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff">
        Coolors.co
      </a>
    </p>
    <p>
      SVG Patterns by <a href="https://heropatterns.com/">HeroPatterns.com</a>
    </p>
    <p>
      SVG Backgrounds and Patterns by{" "}
      <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
        SVGBackgrounds.com
      </a>
    </p>
    <p>© {new Date().getFullYear()} &middot; Oskar Wild</p>
  </div>
)

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem 0",
    backgroundColor: "#f4f4f4",
  },
}

export default Footer
