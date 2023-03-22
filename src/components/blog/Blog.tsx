import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useEffect } from "react"
import SimpleParallax from "simple-parallax-js"
import * as P from "./parts"

const Blog: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (parallaxRef.current) {
      new SimpleParallax(parallaxRef.current, {
        delay: 1,
        transition: "cubic-bezier(0,0,0,1)",
        scale: 1.2,
      })
    }
  }, [parallaxRef])
  return (
    <P.Wrapper ref={parallaxRef}>
      <P.Shadow></P.Shadow>
      <P.ContentContainer>
        <P.TextContainer>
          <P.Text>Sprawdź bloga</P.Text>
        </P.TextContainer>
        <P.ImageContainer>
          <div>
            <StaticImage
              src="../../assets/image/weddingDance.jpg"
              alt="wedding"
            ></StaticImage>
          </div>
        </P.ImageContainer>
      </P.ContentContainer>
    </P.Wrapper>
  )
}

export default Blog
