import React, { useRef, useLayoutEffect } from "react"
import SimpleParallax from "simple-parallax-js"
import { ButtonSecondary } from "../../UI/UI"
import * as P from "./parts"
import { StaticImage } from "gatsby-plugin-image"

const Photo: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (parallaxRef.current) {
        new SimpleParallax(parallaxRef.current, {
          delay: 1,
          transition: "cubic-bezier(0,0,0,1)",
          scale: 1.5,
        })
      }
    }
  }, [parallaxRef])

  return (
    <P.ParalaxContainer ref={parallaxRef}>
      <StaticImage
        src="../../assets/image/weddingDance.jpg"
        alt="wedding dance"
        style={{ position: "absolute", top: "0" }}
        placeholder="blurred"
        className="backgroundImage"
      />
      <P.ParalaxContent>
        <ButtonSecondary showing={true} scaleReducer="0.6">
          Zobacz galerie
        </ButtonSecondary>
      </P.ParalaxContent>
    </P.ParalaxContainer>
  )
}

export default Photo
