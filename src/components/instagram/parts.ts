import styled from "styled-components"

export const Content = styled.section`
  position: relative;
  height: 500px;
  border: 1px blue solid;
`
export const Wrapper = styled.div`
  user-select: none;
  display: flex;
  gap: 4vmin;
  position: absolute;
  left: 50%;
  transform: translateX(0%);
  top: 0;
  margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
  height: 400px;
  width: 300px;
  border: 1px red solid;

  img {
    width: 300px;
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
  border: 3px red solid;
`
