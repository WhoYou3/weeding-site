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
      <P.FrameWrapper leftFrame>
        <StaticImage
          src="../../assets/image/frame.png"
          alt="frame"
          height={100}
        />
      </P.FrameWrapper>
      <P.FrameWrapper rightFrame>
        <StaticImage
          src="../../assets/image/frame.png"
          alt="frame"
          height={100}
        />
      </P.FrameWrapper>
    </P.Wrapper>
  )
}

export default Quote
