import React from "react"

import { GlobalStyle } from "."
import {
  AboutMe,
  Header,
  Layout,
  MyDescription,
  References,
  Workship,
  Instagram,
  SEO,
} from "../components"
const paragraph =
  "Jestem certyfikowanym wedding plannerem oraz założycielką Kuźni Marzeń. Uwielbiam oragnizować wydarzenia i obserwować jak cały projekt nabiera kształtów. W każdym projekcie staram się stworzyć coś wyjątkowego pasującego do danej pary. Zawsze staram się łączyć nowoczesne rozwiązania z niestandardowymi, ale eleganckimi elementami. Moim przepisem na sukces jest dbałość o szczegóły i wsłuchanie się w oczekiwania narzeczonych.Kuźnia Marzeń została założona w 2019 roku. Założenie agencji ślubnej to spełnienie moich marzeń. Cel dla mnie jest jeden stworzyć wspaniałe, eleganckie i luksusowe przyjęcie, które jest spełnieniem Waszych oczekiwań. Uważam, że każda Para jest wyjątkowa i nie ma dwóch identycznych wydarzeń, dlatego do każdego ślubu podchodzę indywidualnie i szukam wyjątkowych i niepowtarzalnych rozwiązań."
const Omnie = () => {
  return (
    <div>
      <GlobalStyle />
      <SEO
        title="O mnie"
        description="Tutaj możesz poznać mnie, wedding plannera specjalizującego się w organizacji wesel plenerowych. Przeczytaj, jak zaczęła się moja przygoda z organizacją wesel i czym się zajmuję. Dowiedz się, jakie mam doświadczenie i jakie usługi oferuję, aby pomóc Ci w zorganizowaniu wymarzonego wesela plenerowego. Skontaktuj się ze mną, aby poznać szczegóły."
      />
      <Layout>
        <Header
          backgroundImage="image2"
          show={false}
          sentence1="Poznajmy się lepiej"
          textPlace="60%"
        ></Header>
        <AboutMe
          sentence="Profesjonalna organizacja ślubów i imprez - twój wymarzony dzień
          zrealizowany perfekcyjnie."
          paragraph={paragraph}
          span="Anna Kopta-Irzyk"
          photo1="photo1"
        />
        <MyDescription />
        <Workship />
        <Instagram />
        <References showing={true} />
      </Layout>
    </div>
  )
}

export default Omnie
