import styled from "styled-components"
import headerPhoto from "../../assets/image/header-photo.jpg"
import headerAboutBackground from "../../assets/image/AboutHeaderBackground.jpg"

import { colors, fonts } from "../../globalStyles"

interface HeaderProps {
  backgroundImage?: string
}

export const Header = styled.header<HeaderProps>`
  height: 100dvh;

  ${(props) =>
    ({
      image1: `background-image: url(${headerPhoto});
      background-position: 70%;`,
      image2: `background-image: url(${headerAboutBackground});
      background-position: 40%;`,
    }[props.backgroundImage])}

  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;

  @media screen and (min-width: 1400px) {
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (min-width: 820px) and (max-height: 500px) {
    padding-top: 3rem;
  }
`

export const Shadow = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
`

export const Title = styled.h1`
  text-align: center;
  font-family: ${fonts.GREATVIBES}, sans-serif;
  color: ${colors.primary};
  font-size: 36px;
  letter-spacing: 3px;

  @media screen and (min-width: 820px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1300px) {
    font-size: 50px;
  }
`

export const ContentWrapper = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  @media screen and (min-width: 1400px) {
    padding-left: 300px;
    padding-top: 200px;
  }
`
