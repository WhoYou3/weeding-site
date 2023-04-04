import styled from "styled-components"

export const TextWrapper = styled.div`
  padding-top: 80px;

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
  -webkit-transition: all 350ms ease;
  transition: all 0.5s ease;
  cursor: pointer;
  margin-bottom: 12px;
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
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  width: 50vmin;
  border: 1px red solid; */

  @media screen and (min-width: 768px) {
  }
`
