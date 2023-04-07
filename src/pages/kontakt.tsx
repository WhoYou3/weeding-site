import React from "react"
import { GlobalStyle } from "."
import { Contact, Layout, Instagram, SEO } from "../components"

const Kontakt: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Nawiąż z nami kontakt i zorganizuj wymarzone wesele na świeżym powietrzu dzięki usługom Wedding Plennera. Znajdź naszą siedzibę i napisz do nas maila lub zadzwoń. Jesteśmy do Twojej dyspozycji, aby pomóc Ci w organizacji wyjątkowego dnia."
      ></SEO>
      <GlobalStyle />
      <Contact />
      <Instagram />
    </Layout>
  )
}

export default Kontakt
