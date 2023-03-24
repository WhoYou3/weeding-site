import React from "react"
import "../../gatsby-browser.js"

import { GlobalStyle } from "."
import { AboutMe, Header, Layout } from "../components"

const Omnie = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Header
          backgroundImage="image2"
          show={false}
          sentence1="Poznajmy się lepiej"
        ></Header>
        <AboutMe />
      </Layout>
    </div>
  )
}

export default Omnie
