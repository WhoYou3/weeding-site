import styled from "styled-components"
import { fonts, colors } from "../../globalStyles"

interface BackgroundProps {
  isOpenHamburgerMenu: boolean
}

interface NavbarProps {
  isScrolled: boolean
  mobileHideNav?: boolean
  isOpenHamburgerMenu?: boolean
}

export const Navbar = styled.nav<NavbarProps>`
  height: 72px;
  background-color: ${colors.primary};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;

  @media screen and (max-width: 820px) {
    transform: ${({ mobileHideNav, isOpenHamburgerMenu }) =>
      mobileHideNav && !isOpenHamburgerMenu
        ? "translateY(-150%)"
        : "translateY(0)"};
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (min-width: 820px) {
    height: ${({ isScrolled }) => (isScrolled ? "72px" : "162px")};

    ${({ isScrolled }) =>
      isScrolled &&
      `
      background-color: rgba(243, 243, 243, 0.6);
      backdrop-filter: blur(20px);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}
    transition: height 0.3s ease;
  }
`

export const NavContainer = styled.div<NavbarProps>`
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.POPPINS}, sans-serif;
  padding: 0 2rem;

  img {
    height: 72px;
  }

  svg {
    margin-top: auto;
    margin-bottom: auto;
    transition: transform 1s ease-in-out;
  }

  svg:hover {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 820px) {
    padding-left: 8rem;
    svg {
      display: none;
    }
    img {
      height: ${({ isScrolled }) => (isScrolled ? "72px" : "162px")};
      transition: height 0.7s ease, opacity 2s ease;
    }
  }
`

export const LinksContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 500px;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  font-size: 20px;
  width: 600px;

  .active {
    color: ${colors.hover};
  }

  a {
    color: ${colors.linksColor};
  }

  a:hover {
    color: ${colors.hover};
  }

  @media screen and (max-width: 819px) {
    display: none;
  }
`

export const Background = styled.div<BackgroundProps>`
  height: 100dvh;
  width: 100%;
  background-color: ${colors.primary};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpenHamburgerMenu }) =>
    isOpenHamburgerMenu ? "translateY(0) " : "translateY(-150%)"};
  transition: transform 0.5s ease-in-out;

  svg.close-icon {
    position: absolute;
    top: 30px;
    right: 30px;
  }
`

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  margin: 3rem;
  opacity: 1;
  align-items: center;
  justify-content: space-around;
  .active {
    color: ${colors.hover};
  }

  img {
    height: 250px;
  }
  a {
    color: ${colors.linksColor};
    font-size: 22px;
  }

  a:hover {
    color: ${colors.hover};
  }

  @media screen and (max-height: 500px) {
    a {
      font-size: 16px;
    }

    img {
      height: 100px;
    }
  }
`

export const IconsContainer = styled.div`
  margin-bottom: 50px;
`
