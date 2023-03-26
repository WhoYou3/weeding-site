import styled from "styled-components"
import { colors, fonts } from "../globalStyles"

interface props {
  space?: string
  scaleReducer?: string
  showing?: boolean
  text?: string
  margin?: string
}

export const ButtonPrimary = styled.button<props>`
  border-radius: 10px;
  background: none;
  background-color: ${colors.primary};
  outline: none;
  border: none;
  min-width: 150px;
  scale: ${(props) => (props.scaleReducer ? `${props.scaleReducer}` : "1")};
  display: ${(props) => (props.showing ? "block" : "none")};
  height: 50px;
  font-size: 18px;
  color: black;
  font-weight: 500;
  padding: 0 15px;

  :hover {
    color: ${colors.hover};
    cursor: pointer;
  }
`

export const ButtonSecondary = styled(ButtonPrimary)<props>`
  background-color: white;
  margin-top: ${(props) => props.space || ""};
  margin-bottom: ${(props) => props.space || ""};
`

export const TextWrapper = styled.div<props>`
  font-family: ${fonts.POPPINS};
  padding: 2rem;
  background-color: ${colors.primary};

  margin: 2rem 0;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => (props.margin ? "2rem" : null)};
  h3 {
    font-family: ${fonts.PLAYFAIR};
    font-weight: 400;

    @media screen and (min-width: 820px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1300px) {
      font-size: 2.5rem;
    }
  }
  p {
    font-family: ${fonts.POPPINS};
    text-align: start;
    font-size: 14px;
  }
`
