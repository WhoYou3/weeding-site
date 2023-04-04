import React from "react"
import { Gallery, Layout } from "../components"
import { GlobalStyle } from "."

const Galeria = () => {
  return (
    <div>
      <GlobalStyle />{" "}
      <Layout>
        <Gallery></Gallery>
      </Layout>
    </div>
  )
}

export default Galeria
