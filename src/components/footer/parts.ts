import styled from "styled-components"
import { fonts } from "../../globalStyles"

export const Footer = styled.footer`
  background: rgb(0, 0, 0);
`

export const Logo = styled.div`
  height: 200px;
  aspect-ratio: 1/1;
  margin: auto;
`

export const Wrapper = styled.div``

export const LinksContainer = styled.ul`
  border: 1px red solid;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  li a {
    color: white;
    font-size: ${fonts.POPPINS};
  }
`

export const IconsContainer = styled.div`
  svg {
    background: "white";
    border-radius: "50%";
    padding: "5px";
    color: #3b5998;
  }
`
