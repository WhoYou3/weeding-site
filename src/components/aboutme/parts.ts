import styled, { keyframes } from "styled-components"
import { colors, fonts } from "../../globalStyles"

interface ContainerProps {
  animate?: boolean
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
    scale: 1.2;
  }

  @media screen and (min-width: 900px) {
    width: 280px;
    order: -1;
    position: absolute;
    right: -10px;
    top: 50px;

    img {
      scale: 1;
      height: 600px;
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

  border: 1px red solid;
  transform: ${({ animate }) =>
    animate ? "translateX(0)" : "translateX(-150%)"};
  transition: 0.5s ease-in;

  @media screen and (min-width: 900px) {
    width: 50%;
  }
`

export const Sentence = styled.h2`
  font-family: ${fonts.PLAYFAIR}, "sans-serif";
  font-weight: 400;
  text-transform: uppercase;
  line-height: 2.5rem;
  font-size: 1.6 rem;
  text-align: center;
`

export const Paragraph = styled.p`
  font-family: ${fonts.POPPINS}, sans-serif;

  font-size: 18px;
`
