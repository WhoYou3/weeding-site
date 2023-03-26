import styled from "styled-components"
import photo from "../../assets/image/AnnaPhoto.jpg"
import { colors } from "../../globalStyles"

interface propsParalaxText {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export const ParalaxDisplay = styled.div`
  display: none;
  position: relative;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`
export const ParalaxText = styled.div<propsParalaxText>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  width: 400px;

  padding: 2rem;
  border-radius: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  p {
    opacity: 1;
    font-size: 20px;
    z-index: 999;
    position: relative;
    color: #f5deb3;
  }
  div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.linksColor};
    opacity: 0.7;

    border-radius: 30px;
  }
`
export const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  img {
    scale: 1.3;
  }
`

export const ParalaxContainer = styled.div`
  height: 70vh;
  background-image: url(${photo});
  background-size: cover;

  background-position: 30%;

  position: relative;
  margin: 2rem 0;

  @media screen and (min-width: 820px) {
    height: 100vh;
  }
`

export const ParalaxContent = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%);
  color: white;
  text-align: center;

  font-weight: bold;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`

export const TextContainer = styled.div``
