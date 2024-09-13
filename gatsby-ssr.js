import React from "react"
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Rubik-ExtraBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Rubik-ExtraBold"
    />,
    <link
      rel="preload"
      href="/fonts/Rubik-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Rubik-Regular"
    />,
    <link
      rel="preload"
      href="/fonts/Rubik-SemiBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Rubik-SemiBold"
    />,
  ])
}
