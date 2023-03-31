import styled from "styled-components"

export const Content = styled.section`
  position: relative;
  height: 500px;

  margin-bottom: 2rem;
`
export const Wrapper = styled.div`
  user-select: none;
  display: flex;
  gap: 2vmin;
  position: absolute;
  left: 50%;
  transform: translateX(0%);
  top: 0;
`

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 230px;

  img {
    width: 40vmin;
    height: 50vmin;
    object-fit: cover;
    object-position: 0% center;
  }
`

export const Scroll = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`
