import React from "react"
import { createGlobalStyle } from "styled-components"
import { Header, Layout } from "../components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 300vh;
    background-color:#F8B1C4;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

`

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
      </Layout>
    </>
  )
}

export default Home
