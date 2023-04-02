import React from "react"
import { createGlobalStyle } from "styled-components"
import {
  Header,
  Layout,
  ParalaxPhoto,
  Workship,
  Quote,
  Blog,
  AboutMe,
  References,
  Instagram,
} from "../components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #FFF0F5;
    width: 100%;
    
    scroll-behavior: smooth;
    overflow-x: hidden;
    
    
  }

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style: none;
  }

`

const paragraph =
  'Witaj! Nazywam się Anna Kopta-Irzyk i jestem założycielką firmy "Kuźnia Marzeń". Od zawsze marzyłam o tym, aby pomagać parom młodym worganizacji wymarzonych ślubów i uroczystości. Dzięki mojej pasji,kreatywności i zaangażowaniu, postanowiłam założyć firmę, któraoferuje kompleksowe usługi w planowaniu i organizacji wyjątkowychwydarzeń. W mojej pracy stawiam na indywidualne podejście do każdejpary, aby zrozumieć ich potrzeby i marzenia oraz pomóc im w ichrealizacji.'

const Home: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Header
          sentence1="Wasza miłość,"
          sentence2="Nasza praca,"
          sentence3="Twój niezapomniany ślub"
          show={true}
          backgroundImage="image1"
          textPlace="300px"
        />
        <AboutMe
          sentence="Profesjonalna organizacja ślubów i imprez - twój wymarzony dzień
          zrealizowany perfekcyjnie."
          paragraph={paragraph}
          scalePhoto={true}
        />
        <Workship />
        <ParalaxPhoto />
        <Quote />
        <Blog />
        <Instagram />
        <References showing={false} />
      </Layout>
    </div>
  )
}

export default Home
