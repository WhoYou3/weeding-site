import React from "react"
import "../../gatsby-browser.js"

import { GlobalStyle } from "."
import { AboutMe, Header, Layout, MyDescription, Workship } from "../components"
const paragraph =
  " - założycielka Kuźni Marzeń. Jestem certyfikowanym wedding plannerem. Uwielbiam oragnizować wydarzenia i obserwować jak cały projekt nabieraształtów. W każdym staram się stworzyć coś wyjątkowego pasującego do danej pary. Zawsze staram się łączyć nowoczesne rozwiązania zniestandardowymi, ale eleganckimi elementami. Moim przepisem na sukcesjest dbałość o szczegóły i wsłuchanie się w oczekiwania narzeczonych.Kuźnia Marzeń została założona w 2019 roku. Założenie agencji ślubnejto spełnienie moich marzeń. Cel dla mnie jest jeden stworzyćwspaniałe, eleganckie i luksusowe przyjęcie, które jest spełnieniemWaszych oczekiwań. Uważam, że każda Para jest wyjątkowa i nie ma dwóchidentycznych wydarzeń, dlatego do każdego ślubu podchodzęindywidualnie i szukam wyjątkowych i niepowtarzalnych rozwiązań."
const Omnie = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Header
          backgroundImage="image2"
          show={false}
          sentence1="Poznajmy się lepiej"
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
      </Layout>
    </div>
  )
}

export default Omnie
