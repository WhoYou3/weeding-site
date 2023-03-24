import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { TextContainer } from "../blog/parts"
import * as P from "./parts"

const Quote: React.FC = () => {
  return (
    <TextContainer>
      <P.Title>
        "Miłość jest największą siłą na świecie."
        <span>~ Martin Luther King Jr.</span>
      </P.Title>
    </TextContainer>
  )
}

export default Quote
