import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TbMenu2 } from "react-icons/Tb"
import HamburgerMenu from "./HamburgerMenu"

import * as P from "../navbar/parts"

const Navbar: React.FC = () => {
  const [isOpenHamburgerMenu, setIsOpenHambugerMenu] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [mobileScrolledHideNav, setMobileScrollHideNav] =
    useState<boolean>(false)
  const [pageYValue, setPageYValue] = useState<number>(0)

  const handleScroll = (): void => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const hideNavMobile = (): void => {
    const scroll: number = window.pageYOffset
    setPageYValue(scroll)
    if (pageYValue < scroll) {
      setMobileScrollHideNav(true)
    } else {
      setMobileScrollHideNav(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", hideNavMobile)
  }

  const showHambugerMenu = (): void => {
    setIsOpenHambugerMenu((prev: boolean) => !prev)
  }

  return (
    <P.Navbar
      isOpenHamburgerMenu={isOpenHamburgerMenu}
      mobileHideNav={mobileScrolledHideNav}
      isScrolled={isScrolled}
    >
      <P.NavContainer isScrolled={isScrolled}>
        <StaticImage
          placeholder="blurred"
          src="../../assets/image/logo.png"
          alt="logo"
        />

        <P.LinksContainer>
          <Link to="/">Strona Główna </Link>
          <Link to="/omnie">O mnie</Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Galeria</Link>
          <Link to="/">Kontakt</Link>
        </P.LinksContainer>
        {!isOpenHamburgerMenu ? (
          <TbMenu2 onClick={showHambugerMenu} size={25} />
        ) : null}
      </P.NavContainer>
      <HamburgerMenu
        showHambugerMenu={showHambugerMenu}
        isOpenHamburgerMenu={isOpenHamburgerMenu}
      />
    </P.Navbar>
  )
}

export default Navbar
