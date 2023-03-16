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
  return (
    <>
      <P.Background isOpenHamburgerMenu={isOpenHamburgerMenu}>
        <AiOutlineClose
          className="close-icon"
          size={30}
          onClick={showHambugerMenu}
        />
        <P.HamburgerMenu>
          <StaticImage src="../../assets/image/logo1.jpg" alt="logo" />

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
