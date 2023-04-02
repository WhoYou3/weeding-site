import styled from "styled-components"
import weddingDancePhoto from "../../assets/image/weddingDance.jpg"

export const ParalaxContainer = styled.div`
  height: 70svh;
  position: relative;
  margin: 2rem 0;

  .backgroundImage {
    width: 100%;
    height: 100%;
    img {
      object-position: 30%;
    }
  }
  @media screen and (min-width: 820px) {
    height: 100vh;
  }
`

export const ParalaxContent = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%);
  color: white;
  text-align: center;

  font-weight: bold;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`
