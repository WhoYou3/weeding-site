import React, { useRef, useLayoutEffect } from "react"
import SimpleParallax from "simple-parallax-js"
import { ButtonSecondary } from "../../UI/UI"

import * as P from "./parts"

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
      <P.ParalaxContent>
        <ButtonSecondary scaleReducer="0.6">Zobacz galerie</ButtonSecondary>
      </P.ParalaxContent>
    </P.ParalaxContainer>
  )
}

export default Photo
