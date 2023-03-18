import styled from "styled-components"
import { colors, fonts } from "../../globalStyles"

export const Wrapper = styled.section`
  margin: 1rem;
  position: relative;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;

    margin: 4rem;
  }
`

export const ImageContainer = styled.div`
  padding: 1rem;
  img {
    scale: 1.2;
  }

  @media screen and (min-width: 900px) {
    width: 280px;
    order: -1;
    position: absolute;
    right: -10px;
    top: 100px;
  }
  img {
    scale: 1;
  }

  @media screen and (min-width: 1350px) {
    right: 10%;
    top: 0;
    width: 400px;
  }
`

export const Container = styled.div`
  margin: 1rem;
  background-color: ${colors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 2rem 2rem;

  height: fit-content;

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
