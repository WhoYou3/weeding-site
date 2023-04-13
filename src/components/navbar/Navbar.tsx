import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TbMenu2 } from "react-icons/tb"
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
        <Link to="/">
          <StaticImage
            placeholder="blurred"
            src="../../assets/image/logo1.png"
            alt="logo"
          />
        </Link>

        <P.LinksContainer>
          <Link data-cy="navbar-link-home" activeClassName="active" to="/">
            Strona Główna{" "}
          </Link>
          <Link
            data-cy="navbar-link-omnie"
            activeClassName="active"
            to="/omnie"
          >
            O mnie
          </Link>
          <Link
            data-cy="navbar-link-oferta"
            activeClassName="active"
            to="/oferta"
          >
            Oferta
          </Link>
          <Link data-cy="navbar-link-blog" activeClassName="active" to="/blog">
            Blog
          </Link>
          <Link
            data-cy="navbar-link-galeria"
            activeClassName="active"
            to="/galeria"
          >
            Galeria
          </Link>
          <Link
            data-cy="navbar-link-kontakt"
            activeClassName="active"
            to="/kontakt"
          >
            Kontakt
          </Link>
        </P.LinksContainer>
        {!isOpenHamburgerMenu ? (
          <TbMenu2
            data-cy="hamburger-icon"
            onClick={showHambugerMenu}
            size={25}
          />
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
