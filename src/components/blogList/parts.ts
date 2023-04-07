import styled from "styled-components"
import { colors, fonts } from "../../globalStyles"

export const Wrapper = styled.section``
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

export const BlogsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  gap: 30px;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;

    padding: 0 2rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 5rem;
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 5rem;
  }
`

export const Blog = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  margin-bottom: 2rem;

  word-wrap: break-word;
  background: ${colors.primary};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;

  .gatsbyImage {
    max-height: 300px;
    min-height: 300px;
  }
`

export const Description = styled.div`
  h3 {
    font-family: ${fonts.POPPINS};
  }

  p:nth-child(2) {
    display: inline;
    font-style: italic;
  }
  div:nth-child(3) {
    display: inline;
    border: 1px rgba(0, 0, 0, 0.25) solid;
    margin: 0 10px;
  }
  p:nth-child(4) {
    display: inline;
  }
  p:nth-child(5) {
    line-height: 1.3rem;
    letter-spacing: 0.05rem;
  }
`
