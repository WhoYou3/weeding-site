import styled from "styled-components"
import { fonts, colors } from "../../globalStyles"

interface BackgroundProps {
  isMenu: boolean
}

export const Navbar = styled.nav`
  height: 72px;
  background-color: ${colors.primary};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (min-width: 820px) {
    height: 162px;
  }
`

export const NavContainer = styled.div`
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
    svg {
      display: none;
    }
    img {
      height: 162px;
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

  a {
    color: ${colors.linksColor};
  }

  a:hover {
    color: ${colors.hover};
  }

  @media screen and (max-width: 820px) {
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
  transform: ${({ isMenu }) =>
    isMenu ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 1s ease-in-out;

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

  img {
    height: fit-content;
  }
  a {
    color: ${colors.linksColor};
    font-size: 22px;
  }
`

export const IconsContainer = styled.div``
