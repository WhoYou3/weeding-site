import styled from "styled-components"
import { colors } from "../../globalStyles"

export const ReferencesWrapper = styled.section`
  background-color: ${colors.primary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 820px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`

export const ReferenceWrapper = styled.div`
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: slide-up 0.5s ease-out;
  animation-fill-mode: forwards;

  svg {
    border: 5px green solid;
    padding: 10px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  h3 {
    display: flex;
    justify-content: space-between;

    span {
      font-style: italic;
      font-weight: 300;
      font-size: 0.9rem;
    }
  }
  p {
    line-height: 22px;
    letter-spacing: 1px;
    position: relative;
  }
  p::before {
    content: "''";
    font-size: 25px;
    font-style: italic;
    margin-right: 10px;
  }
  p::after {
    content: "''";
    font-size: 25px;
    font-style: italic;
    margin-left: 5px;
  }
  @media screen and (min-width: 820px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`
