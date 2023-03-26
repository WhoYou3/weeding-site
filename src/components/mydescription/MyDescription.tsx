import React, { useRef, useLayoutEffect } from "react"
import SimpleParallax from "simple-parallax-js"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary, ButtonSecondary, TextWrapper } from "../../UI/UI"
import * as P from "./parts"

const MyDescription = () => {
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
    <>
      <P.ParalaxDisplay>
        <P.ParalaxContainer ref={parallaxRef}>
          <P.ParalaxContent></P.ParalaxContent>
        </P.ParalaxContainer>
        <P.ParalaxText left="10%" top="10%">
          <div></div>
          <p>
            Jako wedding planner, moim celem jest sprawienie, że Twój ślub
            będzie dniem, który będzie Cię wzruszać i inspirować przez całe
            życie. Dzięki mojemu doświadczeniu i wiedzy, pomogę Ci stworzyć
            niezapomniane wspomnienia. Jestem pełna pasji i zapału do
            organizacji wesel, co pozwala mi na tworzenie wyjątkowych i
            spersonalizowanych wydarzeń. Pracuję z każdym klientem
            indywidualnie, aby poznać ich potrzeby i preferencje, a następnie
            dopasować planowanie wesela do ich wymagań.
          </p>
        </P.ParalaxText>
        <P.ParalaxText right="10%" bottom="20%">
          <div></div>
          <p>
            Moją największą zaletą jest dbałość o szczegóły i organizacja,
            dzięki czemu mogę zrobić wszystko, co w mojej mocy, aby Twój dzień
            był idealny. Cenię sobie także współpracę z najlepszymi
            usługodawcami branży, co pozwala mi na zapewnienie najlepszych
            rozwiązań dla moich klientów. Niech Twój ślub będzie tak piękny, jak
            marzysz, żeby był. Skontaktuj się ze mną i pozwól mi pomóc Ci w
            zaplanowaniu wymarzonego wesela.
          </p>
        </P.ParalaxText>
      </P.ParalaxDisplay>

      <P.Wrapper>
        <P.ImageContainer>
          <StaticImage
            src="../../assets/image/AnnaPhoto.jpg"
            alt="Anna portrait"
          />
        </P.ImageContainer>
        <TextWrapper style={{ margin: "2rem" }}>
          <p>
            Jako wedding planner, moim celem jest sprawienie, że Twój ślub
            będzie dniem, który będzie Cię wzruszać i inspirować przez całe
            życie. Dzięki mojemu doświadczeniu i wiedzy, pomogę Ci stworzyć
            niezapomniane wspomnienia. Jestem pełna pasji i zapału do
            organizacji wesel, co pozwala mi na tworzenie wyjątkowych i
            spersonalizowanych wydarzeń. Pracuję z każdym klientem
            indywidualnie, aby poznać ich potrzeby i preferencje, a następnie
            dopasować planowanie wesela do ich wymagań.
          </p>
        </TextWrapper>
        <TextWrapper style={{ margin: "2rem" }}>
          <p>
            Moją największą zaletą jest dbałość o szczegóły i organizacja,
            dzięki czemu mogę zrobić wszystko, co w mojej mocy, aby Twój dzień
            był idealny. Cenię sobie także współpracę z najlepszymi
            usługodawcami branży, co pozwala mi na zapewnienie najlepszych
            rozwiązań dla moich klientów. Niech Twój ślub będzie tak piękny, jak
            marzysz, żeby był. Skontaktuj się ze mną i pozwól mi pomóc Ci w
            zaplanowaniu wymarzonego wesela.
          </p>
          <ButtonSecondary showing={true}>
            Skontaktuj się ze mną{" "}
          </ButtonSecondary>
        </TextWrapper>
      </P.Wrapper>
    </>
  )
}

export default MyDescription
