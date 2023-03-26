import React, { useEffect, useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TextWrapper } from "../../UI/UI"
import * as P from "./parts"

interface AboutMeProps {
  sentence?: string
  paragraph?: string
  span?: string
  photo1?: string
  scalePhoto?: boolean
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const animateElement = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (animateElement.current) {
        const elementTop = animateElement.current.getBoundingClientRect().top
        const elementHeight = animateElement.current.offsetHeight
        const windowHeight = window.innerHeight

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
    <P.Wrapper>
      <P.Container animate={isVisible} ref={animateElement}>
        <P.Sentence>
          Profesjonalna organizacja ślubów i imprez - twój wymarzony dzień
          zrealizowany perfekcyjnie.
        </P.Sentence>
      </P.Container>
      <P.ImageContainer scalePhoto={props.scalePhoto} animate={isVisible}>
        {props.photo1 ? (
          <StaticImage
            placeholder="blurred"
            src="../../assets/image/AnnaPortrait.jpg"
            alt="portrait"
          />
        ) : (
          <StaticImage
            placeholder="blurred"
            src="../../assets/image/portrait.jpg"
            alt="portrait"
          />
        )}
      </P.ImageContainer>
      <P.Container animate={isVisible}>
        <P.Paragraph>
          <span>{props.span}</span> {props.paragraph}
        </P.Paragraph>
      </P.Container>
    </P.Wrapper>
  )
}

export default AboutMe
