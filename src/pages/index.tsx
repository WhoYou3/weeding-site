import React from "react"
import { createGlobalStyle } from "styled-components"
import { Layout } from "../components"

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
