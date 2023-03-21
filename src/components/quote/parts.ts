import styled from "styled-components"
import { colors, fonts } from "../../globalStyles"

interface propsFrameWrapper {
  leftFrame?: boolean
  rightFrame?: boolean
}
export const Wrapper = styled.section`
  background-color: ${colors.primary};
  height: 200px;
  width: 100%;
  margin-top: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const FrameWrapper = styled.div<propsFrameWrapper>`
  position: absolute;
  height: 100%;
  right: ${(props) => (props.rightFrame ? "0" : null)};
  left: ${(props) => (props.leftFrame ? "0" : null)};
  transform: ${(props) => (props.leftFrame ? "rotate(180deg)" : null)};
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
