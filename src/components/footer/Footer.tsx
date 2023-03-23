import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillFacebook } from "react-icons/Ai"
import { BsFacebook, BsInstagram } from "react-icons/Bs"
import * as P from "./parts"

const Footer = () => {
  return (
    <P.Footer>
      <P.Logo>
        <StaticImage
          src="../../assets/image/logo.png"
          alt="logo"
          layout="fullWidth"
        />
      </P.Logo>
      <P.IconsContainer>
        <AiFillFacebook
          size={40}
          style={{
            color: "#3B5998",

            outline: "none",
          }}
        />
        <BsInstagram size={40}></BsInstagram>
      </P.IconsContainer>
      <P.Wrapper>
        <P.LinksContainer>
          <li>
            <Link to="/">Strona Główna </Link>
          </li>
          <li>
            <Link to="/">Oferta</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Galeria</Link>
          </li>
          <li>
            <Link to="/">Kontakt</Link>
          </li>
        </P.LinksContainer>
      </P.Wrapper>
    </P.Footer>
  )
}

export default Footer
