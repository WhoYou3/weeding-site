import styled from "styled-components"
import { colors, fonts } from "../../globalStyles"

export const Wrapper = styled.section`
  background-color: ${colors.primary};
  padding: 2rem;
  font-family: ${fonts.POPPINS};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 1000px) {
    margin-top: 6rem;
    padding: 4rem;
    padding-top: 2rem;
  }
`

export const Title = styled.h2`
  font-family: ${fonts.GREATVIBES};
  text-align: center;
`

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  text-align: center;
  margin: 1.5rem 0;
`

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 820px) {
    flex-direction: row;

    justify-content: center;
    gap: 30px;
  }
`
