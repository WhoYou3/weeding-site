import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
  description?: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "pl" }}
      title={title + " | " + "Kuźnia Marzeń"}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  )
}

export default SEO
