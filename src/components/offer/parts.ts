import styled from "styled-components"

interface PropsWrapper {
  reverse: boolean
  animate?: boolean
}

export const Wrapper = styled.section<PropsWrapper>`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  transform: ${({ animate, reverse }) =>
    animate
      ? "translateX(0)"
      : reverse
      ? "translateX(150%)"
      : "translateX(-150%)"};
  transition: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media screen and (min-width: 1024px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
  }
`

export const ImageContainer = styled.div<PropsWrapper>`
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;

  @media screen and (min-width: 1024px) {
    height: 600px;
    width: 150%;
    min-width: 400px;
    margin-right: ${({ reverse }) => (reverse ? "" : "4rem")};
    margin-left: ${({ reverse }) => (reverse ? "4rem" : "")};
  }
`

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`
