import React from "react"
import { GlobalStyle } from "."
import { Contact, Layout, Instagram } from "../components"

const Kontakt: React.FC = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Contact />
      <Instagram />
    </Layout>
  )
}

export default Kontakt
