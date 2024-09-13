import React from "react"

import Header from "../components/Header"
import Banner from "../components/Banner"
import MainDescription from "../components/MainDescription"
import SkillsOverview from "../components/SkillsOverview"
import Certifications from "../components/Certifications"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout header={<Header />}>
    <Banner>
      Senior Full Stack Developer with over a decade of hands-on experience
    </Banner>
    <MainDescription />
    <SkillsOverview />
    <Certifications />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Oskar Wild" />

export default IndexPage
