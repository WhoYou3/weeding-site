import styled from "styled-components"
import weddingDancePhoto from "../../assets/image/weddingDance.jpg"

export const ParalaxContainer = styled.div`
  height: 70vh;
  background-image: url(${weddingDancePhoto});
  background-size: cover;

  background-position: 30%;

  position: relative;
  overflow: hidden;

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
