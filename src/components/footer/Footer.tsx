import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillFacebook } from "react-icons/ai"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import * as P from "./parts"

const Footer = () => {
  return (
    <P.Footer>
      <P.Logo>
        <StaticImage
          src="../../assets/image/logo1.png"
          alt="logo"
          layout="fullWidth"
        />
      </P.Logo>

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
        <P.ContactContainer>
          <p>Anna Kopta-Irzyk</p>
          <p>666-666-666</p>

          <p>TwójAdresEmail.gmail.com</p>
        </P.ContactContainer>
        <P.IconsContainer>
          <AiFillFacebook size={40} color="white" />
          <BsInstagram size={36} color="white" />
          <BsTiktok size={36} color="white" />
        </P.IconsContainer>
      </P.Wrapper>
    </P.Footer>
  )
}

export default Footer
