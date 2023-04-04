import styled from "styled-components"
import { colors, fonts } from "../../globalStyles"

export const TextWrapper = styled.section`
  background-color: ${colors.primary};
`

export const Title = styled.h3`
  font-family: ${fonts.POPPINS};
  padding: 2rem;
  text-align: center;

  span {
    font-family: ${fonts.PLAYFAIR};
    transform: skewX(-25deg);
    display: block;
    font-weight: 200;
  }

  @media screen and (min-width: 820px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1300px) {
    font-size: 2.5rem;
  }
`
