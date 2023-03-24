import React from "react"
import { createGlobalStyle } from "styled-components"
import {
  Header,
  Layout,
  ParalaxPhoto,
  Workship,
  Quote,
  Blog,
  AboutMeHomePage,
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
    

    width: 100%;
    height: 600vh;
    scroll-behavior: smooth;
    
    
  }

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style: none;
  }

`

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
        />
        <AboutMeHomePage />
        <Workship />
        <ParalaxPhoto />
        <Quote />
        <Blog />
      </Layout>
    </div>
  )
}

export default Home
