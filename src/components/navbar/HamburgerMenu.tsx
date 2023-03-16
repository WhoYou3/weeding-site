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
  showMenu: () => void
  isMenu: boolean
}

const NavbarMenu: React.FC<HamburgerMenuProps> = ({ showMenu, isMenu }) => {
  return (
    <>
      <P.Background isMenu={isMenu}>
        <AiOutlineClose className="close-icon" size={30} onClick={showMenu} />
        <P.HamburgerMenu>
          <StaticImage src="../../assets/image/logo.jpg" alt="logo" />

          <Link to="/">Strona Główna</Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Galeria</Link>
          <Link to="/">Kontakt</Link>
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
