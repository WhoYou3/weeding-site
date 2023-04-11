import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillFacebook } from "react-icons/ai"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { FaPinterestP } from "react-icons/fa"
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
            <Link to="/omnie">O mnie </Link>
          </li>
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </P.LinksContainer>
        <P.ContactContainer>
          <p>Anna Kopta-Irzyk</p>
          <p>694-050-344</p>

          <p>anna.kuznia.marzen@gmail.com</p>
        </P.ContactContainer>
        <P.IconsContainer>
          <a
            href="https://www.facebook.com/kuznia.marzen.wedding"
            target="_blank"
          >
            <AiFillFacebook size={40} color="white" />
          </a>
          <a
            href="https://www.instagram.com/kuznia.marzen.weddingplanner/"
            target="_blank"
          >
            <BsInstagram size={36} color="white" />
          </a>
          <a
            href="https://pl.pinterest.com/akkuzniamarzen/?eq=%40akkuzniamarzen&etslf=4245"
            target="_blank"
          >
            <FaPinterestP size={36} color="white" />
          </a>
        </P.IconsContainer>
      </P.Wrapper>
    </P.Footer>
  )
}

export default Footer
