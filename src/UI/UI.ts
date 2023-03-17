import styled from "styled-components"
import { colors } from "../globalStyles"

export const ButtonPrimary = styled.button`
  border-radius: 10px;
  background: none;
  background-color: ${colors.primary};
  outline: none;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 18px;
  color: black;

  :hover {
    color: ${colors.hover};
    cursor: pointer;
  }
`
