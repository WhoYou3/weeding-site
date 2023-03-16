import React from "react"
import { createGlobalStyle } from "styled-components"
import { Layout } from "../components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 300vh;
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
        <h1>TEST</h1>
      </Layout>
    </>
  )
}

export default Home
