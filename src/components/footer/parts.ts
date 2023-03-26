import styled from "styled-components"
import { fonts } from "../../globalStyles"

// TODO: Hover Links and Active page

export const Footer = styled.footer`
  background: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media screen and (min-width: 820px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  height: 200px;
  aspect-ratio: 1/1;
  margin: auto;

  @media screen and (min-width: 820px) {
    height: 345px;
    border-right: 1px rgba(255, 255, 255, 0.4) solid;
    padding-right: 1rem;
    margin: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 820px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  gap: 10px;

  @media screen and (min-width: 820px) {
    border-right: 1px rgba(255, 255, 255, 0.4) solid;
    margin: 0;
    padding: 1rem;
    flex: 2;
  }

  li {
    border-bottom: 1px rgba(255, 255, 255, 0.2) solid;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 820px) {
      border-bottom: none;
    }
  }
  li a {
    color: white;
    font-size: ${fonts.POPPINS};
  }
`

export const IconsContainer = styled.div`
  display: flex;
  margin: auto;

  justify-content: center;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px rgba(255, 255, 255, 0.2) solid;

  @media screen and (min-width: 820px) {
    display: flex;
    flex-wrap: wrap;
    border-bottom: none;
  }
`

export const ContactContainer = styled.div`
  color: white;
  font-family: ${fonts.POPPINS};
  text-align: center;

  @media screen and (min-width: 820px) {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border-right: 1px rgba(255, 255, 255, 0.4) solid;
  }
`
