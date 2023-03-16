import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TbMenu2 } from "react-icons/tb"
import HamburgerMenu from "./HamburgerMenu"

import * as P from "../navbar/parts"

const Navbar: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const showMenu = (): void => {
    setIsMenu((prev: boolean) => !prev)
  }

  return (
    <P.Navbar>
      <P.NavContainer>
        <StaticImage src="../../assets/image/logo.jpg" alt="logo" />

        <P.LinksContainer>
          <Link to="/">Strona Główna</Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Galeria</Link>
          <Link to="/">Kontakt</Link>
        </P.LinksContainer>
        {!isMenu ? <TbMenu2 onClick={showMenu} size={25} /> : null}
        <HamburgerMenu showMenu={showMenu} isMenu={isMenu} />
      </P.NavContainer>
    </P.Navbar>
  )
}

export default Navbar
