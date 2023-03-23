import styled from "styled-components"
import weddingDres from "../../assets/image/weddingDres.jpg"
import blogImage01 from "../../assets/image/blogImage01.jpg"
import blogImage02 from "../../assets/image/blogImage02.jpg"
import blogImage03 from "../../assets/image/blogImage03.jpg"
import blogImage04 from "../../assets/image/blogImage04.jpg"
import { colors, fonts } from "../../globalStyles"

export const Container = styled.section`
  position: relative;

  width: 100%;
`
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${weddingDres});
  background-size: cover;

  background-position: 45%;

  position: relative;
  @media screen and (min-width: 820px) {
    height: 100vh;
  }
`

export const Shadow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  position: 0;
  width: 100%;
  height: 100%;
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 35;

  position: absolute;
  top: 0;
`
export const TextContainer = styled.div`
  background-color: rgba(243, 243, 243, 0.4);
  height: 200px;
  margin: 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 0.7rem;
`

export const Text = styled.h3`
  font-family: ${fonts.POPPINS};
  padding: 2rem;
  text-align: center;
  z-index: 3;
  font-size: clamp(16px, 3vmin, 25px);

  span {
    font-style: italic;
    text-decoration: underline;
    color: ${colors.hover};
  }

  @media screen and (min-width: 820px) {
  }
`

export const ImagesContainer = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
`
export const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  :hover > :nth-child(1) {
    transform: translate(-160%, 15%) rotate(-35deg);
  }
  :active > :nth-child(1) {
    transform: translate(-160%, 15%) rotate(-35deg);
  }
  :hover > :nth-child(2) {
    transform: translate(-60%, 5%) rotate(-15deg);
  }
  :active > :nth-child(2) {
    transform: translate(-60%, 5%) rotate(-15deg);
  }
  :hover > :nth-child(3) {
    transform: translate(160%, 15%) rotate(35deg);
  }
  :active > :nth-child(3) {
    transform: translate(160%, 15%) rotate(35deg);
  }
  :hover > :nth-child(4) {
    transform: translate(60%, 5%) rotate(5deg);
  }
  :active > :nth-child(4) {
    transform: translate(60%, 5%) rotate(5deg);
  }
`

export const Card = styled.div`
  width: 20vmin;
  aspect-ratio: 5/7;
  background-color: rgba(0, 0, 0);
  border-radius: 5px;
  position: absolute;

  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);

  :nth-child(1) {
    background: url(${blogImage01});

    background-size: cover;
    transform: translateX(-10%) rotate(-1deg);
  }
  :nth-child(2) {
    background: url(${blogImage02});

    background-size: cover;
    transform: rotate(-2deg);
  }
  :nth-child(3) {
    background: url(${blogImage03});

    background-size: cover;
    transform: translateX(-6%) rotate(3deg);
  }

  :nth-child(4) {
    background: url(${blogImage04});

    background-size: cover;
    transform: translate(10%, 3%) rotate(5deg);
  }
`
// export const ImageContainer = styled.div<ImageContainerProps>`
//   position: absolute;
//   left: ${(props) => (props.left ? `${props.left}` : null)};
//   right: ${(props) => (props.right ? `${props.right}` : null)};
//   top: ${(props) => (props.top ? `${props.top}` : null)};
//   bottom: ${(props) => (props.bottom ? `${props.bottom}` : null)};
//   transform: ${(props) => (props.transform ? `${props.transform}` : null)};
//   margin-left: 1rem;
//   margin-right: 1rem;
//   z-index: ${(props) => (props.zindex ? `${props.zindex}` : null)};
//   img {
//     height: 15vh;
//     width: ${(props) => (props.width ? `${props.width}` : null)};
//   }
// `
