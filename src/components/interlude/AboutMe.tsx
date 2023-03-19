import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as P from "./parts"
import { ButtonSecondary } from "../../UI/UI"

const AboutMe: React.FC = () => {
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
        } else setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return (): void => window.removeEventListener("scroll", handleScroll)
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
        <StaticImage src="../../assets/image/portrait.jpg" alt="portrait" />
      </P.ImageContainer>
      <P.Container animate={isVisible}>
        <P.Paragraph>
          "Witaj! Nazywam się Anna Kopta Irzyk i jestem założycielką firmy
          "Kuźnia Marzeń". Od zawsze marzyłam o tym, aby pomagać parom młodym w
          organizacji wymarzonych ślubów i uroczystości. Dzięki mojej pasji,
          kreatywności i zaangażowaniu, postanowiłam założyć firmę, która
          oferuje kompleksowe usługi w planowaniu i organizacji wyjątkowych
          wydarzeń. W mojej pracy stawiam na indywidualne podejście do każdej
          pary, aby zrozumieć ich potrzeby i marzenia, i pomóc im w ich
          realizacji.
        </P.Paragraph>
        <Link to="/">
          <ButtonSecondary>Więcej o mnie</ButtonSecondary>
        </Link>
      </P.Container>
    </P.Wrapper>
  )
}

export default AboutMe
