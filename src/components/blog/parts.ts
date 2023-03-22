import styled from "styled-components"
import weddingDres from "../../assets/image/weddingDres.jpg"
import { fonts } from "../../globalStyles"

export const Wrapper = styled.section`
  height: 70vh;
  background-image: url(${weddingDres});
  background-size: cover;

  background-position: 40%;

  position: relative;
  @media screen and(min-width: 820px) {
    height: 100vh;
  }
`

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  position: 0;
  width: 100%;
  height: 100%;
  scale: 1 !important;
`

export const ContentContainer = styled.div`
  height: 100%;
  border: 1px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const TextContainer = styled.div`
  width: 80%;
  border: 1px blue solid;
`

export const Text = styled.h3`
  font-family: ${fonts.POPPINS};
  padding: 2rem;
  text-align: center;
`

export const ImageContainer = styled.div`
  border: 1px blue solid;
  width: 100%;
  height: 50%;
  position: relative;

  div {
  }
  img {
    height: 100px;
  }
`
