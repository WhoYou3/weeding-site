import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AiFillFacebook, AiFillInstagram, AiOutlineClose } from "react-icons/ai"
import { FaPinterestP } from "react-icons/fa"
import * as P from "./parts"

interface HamburgerMenuProps {
  showHambugerMenu: () => void
  isOpenHamburgerMenu: boolean
}

const NavbarMenu: React.FC<HamburgerMenuProps> = ({
  showHambugerMenu,
  isOpenHamburgerMenu,
}) => {
  if (typeof document !== "undefined") {
    isOpenHamburgerMenu
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible")
  }

  return (
    <>
      <P.Background isOpenHamburgerMenu={isOpenHamburgerMenu}>
        <AiOutlineClose
          className="close-icon"
          size={30}
          onClick={showHambugerMenu}
        />
        <P.HamburgerMenu>
          <StaticImage src="../../assets/image/logo1.png" alt="logo" />

          <Link data-cy="hamburger-link-home" activeClassName="active" to="/">
            Strona Główna
          </Link>
          <Link
            data-cy="hamburger-link-omnie"
            activeClassName="active"
            to="/omnie"
          >
            O mnie
          </Link>
          <Link
            data-cy="hamburger-link-oferta"
            activeClassName="active"
            to="/oferta"
          >
            Oferta
          </Link>
          <Link
            data-cy="hamburger-link-blog"
            activeClassName="active"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            data-cy="hamburger-link-galeria"
            activeClassName="active"
            to="/galeria"
          >
            Galeria
          </Link>
          <Link
            data-cy="hamburger-link-kontakt"
            activeClassName="active"
            to="/kontakt"
          >
            Kontakt
          </Link>
        </P.HamburgerMenu>
        <P.IconsContainer>
          <a
            href="https://www.facebook.com/kuznia.marzen.wedding"
            target="_blank"
          >
            <AiFillFacebook size={40} />
          </a>
          <a
            href="https://www.instagram.com/kuznia.marzen.weddingplanner/"
            target="_blank"
          >
            <AiFillInstagram size={40} />
          </a>
          <a
            href="https://pl.pinterest.com/akkuzniamarzen/?eq=%40akkuzniamarzen&etslf=4245"
            target="_blank"
          >
            <FaPinterestP size={36} style={{ color: "black" }} color="white" />
          </a>
        </P.IconsContainer>
      </P.Background>
    </>
  )
}

export default NavbarMenu
