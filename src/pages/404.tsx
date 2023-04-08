import React from "react"
import { GlobalStyle } from "."
import { Layout } from "../components"
import { TextWrapper } from "../UI/UI"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <GlobalStyle />
      <TextWrapper>
        <div
          style={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>
            Ups... Chyba zabłądziłeś lub zabłądziłaś, wracaj do strony głównej
          </h2>
          <Link to="/">Strona główna</Link>
        </div>
      </TextWrapper>
    </Layout>
  )
}

export default Error
