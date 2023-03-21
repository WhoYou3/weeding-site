import React from "react"
import { createGlobalStyle } from "styled-components"
import { Header, Layout, ParalaxPhoto, Workship, Quote } from "../components"

import AboutMe from "../components/aboutme/AboutMe"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    height: 900vh;
    width: 100%;
    
    
  }

  a {
    text-decoration: none;
    color: black;
  }

`

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <AboutMe />
        <Workship />
        <ParalaxPhoto />
        <Quote />
      </Layout>
    </>
  )
}

export default Home
