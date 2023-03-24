import React, { useEffect, useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TextWrapper } from "../../UI/UI"
import * as P from "./parts"

const AboutMe: React.FC = () => {
  const animateElement = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  console.log(isVisible)

  useEffect(() => {
    const handleScroll = (): void => {
      if (animateElement.current) {
        const elementTop = animateElement.current.getBoundingClientRect().top
        const elementHeight = animateElement.current.offsetHeight
        const windowHeight = window.innerHeight
        console.log(elementHeight)

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
      <P.ImageContainer animate={isVisible}>
        <StaticImage
          placeholder="blurred"
          src="../../assets/image/AnnaPortrait.jpg"
          alt="portrait"
        />
      </P.ImageContainer>
      <P.Container animate={isVisible}>
        <P.Paragraph>
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.7rem",
              marginBottom: "1rem",
            }}
          >
            Anna Kopta - Irzyk
          </span>{" "}
          - założycielka Kuźni Marzeń. Jestem certyfikowanym wedding plannerem.
          Uwielbiam oragnizować wydarzenia i obserwować jak cały projekt nabiera
          kształtów. W każdym staram się stworzyć coś wyjątkowego pasującego do
          danej pary. Zawsze staram się łączyć nowoczesne rozwiązania z
          niestandardowymi, ale eleganckimi elementami. Moim przepisem na sukces
          jest dbałość o szczegóły i wsłuchanie się w oczekiwania narzeczonych.
          Kuźnia Marzeń została założona w 2019 roku. Założenie agencji ślubnej
          to spełnienie moich marzeń. Cel dla mnie jest jeden stworzyć
          wspaniałe, eleganckie i luksusowe przyjęcie, które jest spełnieniem
          Waszych oczekiwań. Uważam, że każda Para jest wyjątkowa i nie ma dwóch
          identycznych wydarzeń, dlatego do każdego ślubu podchodzę
          indywidualnie i szukam wyjątkowych i niepowtarzalnych rozwiązań.
        </P.Paragraph>
      </P.Container>
    </P.Wrapper>
  )
}

export default AboutMe
