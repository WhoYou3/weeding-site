import styled from "styled-components"
import { colors } from "../../globalStyles"

export const TextWrapper = styled.div`
  padding-top: 80px;
  p {
    text-align: center;
  }

  @media screen and (min-width: 820px) {
    width: 70%;
    margin: auto;
  }
`
export const ImageContainer = styled.div` 
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;
  margin-bottom: 2rem;

  @media screen and (min-width: 820px) {
    -webkit-column-count: 3;
  -moz-column-count: 3
  column-count: 3;
  }
  @media screen and (min-width: 1200px) {
   
    -webkit-column-count: 4;
     -moz-column-count: 4;
    column-count: 4;
  }
`

export const Image = styled.div`
  cursor: pointer;
  margin-bottom: 12px;
  background-color: #fff;
  img {
    :hover {
      transition: all 1s ease;
      -webkit-transition: all 500ms ease;
      transform: scale(1.2);
      filter: opacity(0.7);
    }
  }
`

export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 60;
  top: 0;
  left: 0;

  svg:nth-child(1) {
    position: absolute;
    right: 0;
    margin-top: 3rem;
    margin-right: 3rem;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
  }
  .specificImage {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 59;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }
  .specificImage img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 90%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const SpecificImage = styled.div`
  position: relative;
  height: 100vh;
  transition: opacity 3s ease-in;
`

export const Address = styled.div`
  height: 50px;
  width: 70%;
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 820px) {
    width: 30%;
  }

  input {
    height: 100%;
    width: 100%;
    border-right: 1px rgba(0, 0, 0, 0.3);
    outline: none;
    border: none;
    border-right: 1px rgba(0, 0, 0, 0.5) solid;
    padding: 0 10px;
    font-size: 1rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  svg {
    height: 100%;
    background: white;
    font-size: 30px;
    padding: 0 10px;
    cursor: pointer;
    margin-right: 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  p {
    position: absolute;
    right: -50px;
    padding: 5px;
    background: ${colors.primary};
  }
`
