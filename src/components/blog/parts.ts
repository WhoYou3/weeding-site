import styled from "styled-components"
import weddingDres from "../../assets/image/weddingDres.jpg"
import blogImage01 from "../../assets/image/blogImage01.jpg"
import blogImage02 from "../../assets/image/blogImage02.jpg"
import blogImage03 from "../../assets/image/blogImage03.jpg"
import blogImage04 from "../../assets/image/blogImage04.jpg"
import { colors, fonts } from "../../globalStyles"

interface testprops {
  blogImage1?: boolean
  blogImage2?: boolean
  blogImage3?: boolean
  blogImage4?: boolean
}

export const Container = styled.section`
  position: relative;

  width: 100%;
`
export const Wrapper = styled.div`
  height: 100svh;
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
  p {
  }
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
    :hover {
      color: ${colors.hover};
      cursor: pointer;
    }
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
  height: 50vmin;
  width: 50vmin;
  margin: auto;
 

  @media screen and (max-width: 620px) {
    :active > :nth-child(1) {
      transform: translate(-50%, -60%) rotate(12deg);
    }
    :active > :nth-child(2) {
      transform: translate(-40%, 60%) rotate(-12deg);
    }

    :active > :nth-child(3) {
      transform: translate(60%, 30%) rotate(0deg);
    }

    :active > :nth-child(4) {
      transform: translate(55%, -65%) rotate(-12deg);
    }
  }
    :hover > :nth-child(1) {
      transform: translate(-50%, -60%) rotate(12deg);
    }
    :hover > :nth-child(2) {
      transform: translate(-40%, 60%) rotate(-12deg);
    }

    :hover > :nth-child(3) {
      transform: translate(60%, 30%) rotate(0deg);
    }

    :hover > :nth-child(4) {
      transform: translate(55%, -65%) rotate(-12deg);
    }
  }
  @media screen and (min-width: 820px) {
    :hover > :nth-child(1) {
      transform: translate(-150%, 15%) rotate(-35deg);
    }
    :active > :nth-child(1) {
      transform: translate(-150%, 15%) rotate(-35deg);
    }
    :hover > :nth-child(2) {
      transform: translate(-50%, 5%) rotate(-15deg);
    }
    :active > :nth-child(2) {
      transform: translate(-50%, 5%) rotate(-15deg);
    }
    :hover > :nth-child(3) {
      transform: translate(140%, 15%) rotate(35deg);
    }
    :active > :nth-child(3) {
      transform: translate(140%, 15%) rotate(35deg);
    }
    :hover > :nth-child(4) {
      transform: translate(60%, 5%) rotate(5deg);
    }
    :active > :nth-child(4) {
      transform: translate(60%, 5%) rotate(5deg);
    }
  }

  @media screen and (min-width: 1000px) {
    width: 120vmin;
  }
`

export const CardWrapper = styled.div`
  height: 26vmin;
  aspect-ratio: 5/5;
  position: absolute;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.2);
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);

  @media screen and (min-width: 820px) {
    height: 35vmin;
  }
  :nth-child(1) {
    transform: translateX(-10%) rotate(-1deg);
  }
  :nth-child(2) {
    transform: rotate(-2deg);
  }
  :nth-child(3) {
    transform: translateX(-6%) rotate(3deg);
  }

  :nth-child(4) {
    transform: translate(10%, 3%) rotate(5deg);
  }
`

export const Card = styled.div<testprops>`
  width: 100%;
  aspect-ratio: 6/5;
  background-color: rgba(0, 0, 0);
  background-image: ${({ blogImage1 }) =>
    blogImage1 ? `url(${blogImage01})` : null};
  background-image: ${({ blogImage2 }) =>
    blogImage2 ? `url(${blogImage02})` : null};
  background-image: ${({ blogImage3 }) =>
    blogImage3 ? `url(${blogImage03})` : null};
  background-image: ${({ blogImage4 }) =>
    blogImage4 ? `url(${blogImage04})` : null};
  background-size: cover;
  background-position: 0 -10px;
  background-repeat: no-repeat;

  @media screen and (min-width: 820px) {
    background-position: 0 -30px;
  }
`
