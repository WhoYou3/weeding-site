import styled from "styled-components"

import { colors, fonts } from "../../globalStyles"

interface HeaderProps {
  backgroundImage?: string
  textPlace?: string
}

export const Header = styled.header<HeaderProps>`
  height: 100svh;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;

  .backgroundImage {
    width: 100%;
    height: 100%;

    img {
      ${(props) =>
        ({
          image1: `object-position: 70%;`,
          image2: `object-position: 40%`,
          image3: `object-position: 60%`,
        }[props.backgroundImage])}
    }
  }

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
  font-size: 28px;
  letter-spacing: 3px;

  @media screen and (min-width: 820px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1300px) {
    font-size: 50px;
  }
`

export const ContentWrapper = styled.div<HeaderProps>`
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 1400px) {
    padding-left: ${({ textPlace }) => textPlace};
    padding-top: 200px;
  }
`
