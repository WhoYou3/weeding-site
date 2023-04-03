import styled from "styled-components"

export const TextWrapper = styled.div`
  padding-top: 80px;

  @media screen and (min-width: 820px) {
    width: 70%;
    margin: auto;
  }
`
export const ImageContainer = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (min-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: 4rem;
    margin-right: 4rem;
  }
`

export const Image = styled.div`
  img {
    object-fit: cover;
    width: 40vmin;
    height: 50vmin;

    opacity: 1;
  }
  img:hover {
    scale: 1.2;
    transition: scale 1.5s ease-in;
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 60;
  svg:nth-child(1) {
    position: absolute;
    right: 0;
    margin-top: 3rem;
    margin-right: 3rem;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
  }
  svg:nth-child(2) {
    position: absolute;
    left: 0;
    margin-left: 2rem;
    font-size: 3rem;
    top: 50%;
    z-index: 100;
    transform: translateY(-50%);
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    :hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  svg:nth-child(3) {
    position: absolute;
    right: 0;
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 3rem;
    top: 50%;
    z-index: 100;
    transform: translateY(-50%);
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    :hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`
export const Shadow = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  filter: blur(50px);
`

export const SpecificImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  width: 70vmin;

  @media screen and (min-width: 768px) {
  }
`
