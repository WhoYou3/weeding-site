import React from "react"
import { Gallery, Layout, SEO } from "../components"
import { GlobalStyle } from "."

const Galeria = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SEO
        title="Galeria"
        description="Zapraszamy do zapoznania się z naszą galerią zdjęć z pięknych plenerowych wesel. Znajdziecie tu inspiracje dla swojego wyjątkowego dnia oraz przykłady naszej pracy. Nasza galeria to doskonały sposób na zapoznanie się z naszymi umiejętnościami i stylem fotografowania. Zobacz nasze piękne ujęcia i poczuj atmosferę naszych plenerowych sesji. Portfolio wedding plenera - galeria, która zapiera dech w piersiach."
      />
      <Gallery></Gallery>
    </Layout>
  )
}

export default Galeria
