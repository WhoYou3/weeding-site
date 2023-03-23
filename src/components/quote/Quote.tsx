import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as P from "./parts"

const Quote: React.FC = () => {
  return (
    <P.Wrapper>
      <P.Title>
        "Miłość jest największą siłą na świecie." -
        <span> Martin Luther King Jr.</span>
      </P.Title>
    </P.Wrapper>
  )
}

export default Quote
