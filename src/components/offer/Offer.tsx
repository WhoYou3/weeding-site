import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useState, useEffect } from "react"
import { TextWrapper } from "../../UI/UI"

import * as P from "./parts"

interface OfferProps {
  kindOffer: string
  description: string
  kindPhoto: string
  reverse?: boolean
}

const Offer: React.FC<OfferProps> = ({
  kindOffer,
  description,
  kindPhoto,
  reverse,
}) => {
  const animateElement = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  useEffect(() => {
    console.log("test")
    const handleScroll = (): void => {
      if (animateElement.current) {
        const elementTop = animateElement.current.getBoundingClientRect().top
        const elementHeight = animateElement.current.offsetHeight
        const windowHeight = window.innerHeight

        console.log(elementTop + " elementtop")
        console.log(elementHeight + " elementHeight")
        console.log(windowHeight + "elementWindowHeigh")

        if (elementTop + elementHeight < windowHeight) {
          setIsVisible(true)
        }
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    return (): void => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <P.Wrapper animate={isVisible} reverse={reverse}>
        <P.TextContent>
          <TextWrapper>
            <h3 style={{ fontSize: "1.2rem" }}>Oferta</h3>
            <h2 ref={animateElement} style={{ fontSize: "1.4rem" }}>
              {kindOffer}
            </h2>
            <p style={{ fontSize: "0.95rem", whiteSpace: "pre-line" }}>
              {description}
            </p>
          </TextWrapper>
        </P.TextContent>
        <P.ImageContainer reverse={reverse}>
          {kindPhoto === "photo1" ? (
            <StaticImage
              src="../../assets/image/offer1.jpeg"
              alt="portrait"
              layout="fullWidth"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            ""
          )}
          {kindPhoto === "photo2" ? (
            <StaticImage
              src="../../assets/image/offer2.jpeg"
              alt="portrait"
              layout="constrained"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            ""
          )}
          {kindPhoto === "photo3" ? (
            <StaticImage
              src="../../assets/image/offer3.jpg"
              alt="offer photo"
            />
          ) : (
            ""
          )}
          {kindPhoto === "photo4" ? (
            <StaticImage
              src="../../assets/image/offer4.jpg"
              alt="offer photo"
            />
          ) : (
            ""
          )}
        </P.ImageContainer>
      </P.Wrapper>
    </>
  )
}

export default Offer
