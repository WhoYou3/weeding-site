import styled from "styled-components"
import { colors } from "../globalStyles"

interface props {
  space?: string
  scaleReducer?: string
}

export const ButtonPrimary = styled.button<props>`
  border-radius: 10px;
  background: none;
  background-color: ${colors.primary};
  outline: none;
  border: none;
  min-width: 150px;
  scale: ${(props) => (props.scaleReducer ? `${props.scaleReducer}` : "1")};

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
