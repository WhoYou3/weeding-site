import React, { useRef, useEffect } from "react"
import SimpleParallax from "simple-parallax-js"
import { ButtonSecondary } from "../../UI/UI"

import * as P from "./parts"

const Photo: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (parallaxRef.current) {
      if (typeof window !== "undefined") {
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

// export default Photo
