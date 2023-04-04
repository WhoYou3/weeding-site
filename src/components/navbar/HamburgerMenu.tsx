import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai"
import * as P from "./parts"

interface HamburgerMenuProps {
  showHambugerMenu: () => void
  isOpenHamburgerMenu: boolean
}

const NavbarMenu: React.FC<HamburgerMenuProps> = ({
  showHambugerMenu,
  isOpenHamburgerMenu,
}) => {
  if(typeof document !== "undefiend"){
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

          <Link activeClassName="active" to="/">
            Strona Główna
          </Link>
          <Link activeClassName="active" to="/omnie">
            O mnie
          </Link>
          <Link activeClassName="active" to="/oferta">
            Oferta
          </Link>
          <Link activeClassName="active" to="/blog">
            Blog
          </Link>
          <Link activeClassName="active" to="/galeria">
            Galeria
          </Link>
          <Link activeClassName="active" to="/kontakt">
            Kontakt
          </Link>
        </P.HamburgerMenu>
        <P.IconsContainer>
          <Link to="/">
            <AiFillFacebook size={40} />
          </Link>
          <Link to="/">
            <AiFillInstagram size={40} />
          </Link>
          <Link to="/">
            <AiOutlineTwitter size={40} />
          </Link>
        </P.IconsContainer>
      </P.Background>
    </>
  )
}

export default NavbarMenu
