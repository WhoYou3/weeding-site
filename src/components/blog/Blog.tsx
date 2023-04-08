import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
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
    <P.Container className="testuje">
      <P.Wrapper ref={parallaxRef}>
        <P.Shadow></P.Shadow>
      </P.Wrapper>
      <P.ContentContainer>
        <P.TextContainer>
          <P.Text>
            Jeżeli chcesz być na bieżąco z najnowszymi ślubnymi trendami i
            poznać przed jakimi trudnymi wyborami stoją Państwo Młodzi
            koniecznie{" "}
            <Link to="/blog">
              <span>śledź mojego Bloga.</span>
            </Link>
          </P.Text>
        </P.TextContainer>
        <P.ImagesContainer>
          <P.ImageGroup>
            <P.CardWrapper>
              <P.Card blogImage1={true}></P.Card>
            </P.CardWrapper>
            <P.CardWrapper>
              <P.Card blogImage2={true}></P.Card>
            </P.CardWrapper>
            <P.CardWrapper>
              <P.Card blogImage3={true}></P.Card>
            </P.CardWrapper>
            <P.CardWrapper>
              <P.Card blogImage4={true}></P.Card>
            </P.CardWrapper>
          </P.ImageGroup>
        </P.ImagesContainer>
      </P.ContentContainer>
    </P.Container>
  )
}

export default Blog
