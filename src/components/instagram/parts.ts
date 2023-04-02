import styled from "styled-components"
import { fonts } from "../../globalStyles"

interface ArrowProps {
  left?: string
  right?: string
}

export const Content = styled.section`
  position: relative;
  height: 55vmin;
  border: 1px red solid
  margin-bottom: 2rem;
  overflow: hidden;
  user-select: none;
`

export const LinkContainer = styled.div`
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: ${fonts.POPPINS};
    font-size: 1.6rem;
    text-align: center;

    @media screen and (min-width: 820px) {
      font-size: 2.5rem;
    }
  }
  a {
    color: #1a237e;

    font-size: 1.1rem;

    @media screen and (min-width: 820px) {
      font-size: 1.3rem;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: 2vmin;
  position: absolute;
  left: 50%;
  transform: translateX(0%);
  top: 0;
`

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 23vmin;

  img {
    width: 40vmin;
    height: 50vmin;
    object-fit: cover;
    object-position: 0% center;
  }
`

export const ArrowIcon = styled.div<ArrowProps>`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  svg {
    font-size: 40px;
    color: black;
    opacity: 0.5;
    margin-left: 1rem;
    margin-right: 1rem;
    @media screen and (min-width: 820px) {
      font-size: 60px;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  svg:hover {
    opacity: 1;
    cursor: pointer;
  }
`
