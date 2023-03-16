import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TbMenu2 } from "react-icons/tb"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import HamburgerMenu from "./HamburgerMenu"

import * as P from "../navbar/parts"

const Navbar: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 0) {
      setIsScrolled(true)
      console.log("ruszyłem")
      console.log(isScrolled)
    } else {
      setIsScrolled(false)
      console.log("wrociłem")
    }
  }

  window.addEventListener("scroll", handleScroll)

  const showMenu = (): void => {
    setIsMenu((prev: boolean) => !prev)
  }

  return (
    <P.Navbar isScrolled={isScrolled}>
      <P.NavContainer isScrolled={isScrolled}>
        <StaticImage src="../../assets/image/logo.jpg" alt="logo" />

        <P.LinksContainer>
          <Link to="/">Strona Główna </Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Galeria</Link>
          <Link to="/">Kontakt</Link>
        </P.LinksContainer>
        {!isMenu ? (
          <TbMenu2 className="open-menu" onClick={showMenu} size={25} />
        ) : null}
        <HamburgerMenu showMenu={showMenu} isMenu={isMenu} />
      </P.NavContainer>
    </P.Navbar>
  )
}

export default Navbar
