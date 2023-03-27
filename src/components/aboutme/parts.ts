import styled, { keyframes } from "styled-components"
import { colors, fonts } from "../../globalStyles"

interface ContainerProps {
  animate?: boolean
  scalePhoto?: boolean
}

const fadeIn = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}`

export const Wrapper = styled.section`
  margin: 1rem;
  position: relative;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;

    margin: 4rem;
  }
`

export const ImageContainer = styled.div<ContainerProps>`
  padding: 1rem;
  opacity: 0;
  animation: ${({ animate }) => animate && fadeIn} 1s ease-in-out forwards;
  img {
    scale: ${({ scalePhoto }) => (scalePhoto ? "1.5" : "1")};
  }

  @media screen and (min-width: 900px) {
    width: 280px;
    order: -1;
    position: absolute;
    right: -10px;
    top: 50px;

    img {
      scale: ${({ scalePhoto }) => (scalePhoto ? "1.5" : "1")};
      height: 500px;
    }
  }

  @media screen and (min-width: 1350px) {
    right: 8%;
    top: 0;
    width: 400px;
  }

  @media screen and (min-width: 1950px) {
    right: 12%;
    top: -30px;
    img {
      height: 500px;
    }
  }
`

export const Container = styled.div<ContainerProps>`
  margin: 1rem;
  background-color: ${colors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 2rem 2rem;
  transform: ${({ animate }) =>
    animate ? "translateX(0)" : "translateX(-150%)"};
  transition: 1s ease-out;

  @media screen and (min-width: 900px) {
    width: 50%;
  }
`

export const Sentence = styled.h2`
  font-family: ${fonts.PLAYFAIR}, "sans-serif";
  font-weight: 400;
  text-transform: uppercase;
  line-height: 2rem;
  font-size: 1.3rem;

  text-align: center;

  @media screen and (min-width: 820px) {
    font-size: 20px;
    line-height: 2.3rem;
  }
`

export const Paragraph = styled.p`
  font-family: ${fonts.POPPINS}, sans-serif;

  font-size: 14px;

  span {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 820px) {
    font-size: 16px;
    span {
      font-size: 1.4rem;
    }
  }
`
