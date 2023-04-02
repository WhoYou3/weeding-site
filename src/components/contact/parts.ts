import styled from "styled-components"
import { colors } from "../../globalStyles"
import rightBackground from "../../assets/image/contactpage-photo.jpg"
import leftBackground from "../../assets/image/contactpage-photo1.jpg"

export const Wrapper = styled.section`
  margin-top: 100px;
  position: relative;
`

export const RightImage = styled.div`
  display: none;
  @media screen and (min-width: 820px) {
    background: url(${rightBackground});
    z-index: -3;
    height: 100%;
    width: 40%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 30%;
    position: absolute;
    right: 0;
    display: block;
    top: 20%;
  }

  svg {
    position: absolute;
    bottom: -25%;
    right: -25%;
    width: 140%;
    height: 120%;
    transform: rotate(45deg);
    z-index: -1;
  }
`

export const LeftImage = styled.div`
  display: none;
  @media screen and (min-width: 820px) {
    background: url(${leftBackground});
    z-index: -3;
    height: 100%;
    width: 40%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -10%;
    position: absolute;
    left: 0;
    display: block;

    svg {
      position: absolute;
      bottom: -25%;
      left: -25%;
      width: 140%;
      height: 120%;
      transform: rotate(-45deg);
      z-index: -1;
    }
  }
`

export const TextWrapper = styled.div`
  @media screen and (min-width: 820px) {
    width: 70%;
    margin: auto;
  }
`

export const Break = styled.div`
  border: 1px rgba(0, 0, 0, 0.2) solid;
  width: 95%;
  margin: auto;

  @media screen and (min-width: 820px) {
  }
`

export const Form = styled.form`
  margin: 2rem;

  padding: 2rem;
  border: 3px #f7cac9 solid;
  background-color: #fff0f5;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 30px;
  max-width: 450px;

  @media screen and (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 820px) {
    min-width: 450px;
  }

  input {
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 5px;
    padding-left: 1rem;
    background-color: #f7cac9;
    color: black;
  }

  textarea {
    background-color: #f7cac9;
    outline: none;
    border: none;
    padding: 5px;
    padding-left: 1rem;
    padding-top: 1rem;
    height: 150px;
    border-radius: 5px;
  }
  div {
    width: fit-content;

    background-color: #fff0f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div:nth-child(1) {
    position: absolute;
    left: -20px;
    top: 50%;
    height: 120px;
    transform: translateY(-50%);

    svg {
      transform: rotate(45deg);
      color: #f7cac9;
    }
  }
  div:nth-child(2) {
    position: absolute;
    right: -20px;
    top: 50%;
    height: 120px;
    transform: translateY(-50%);
    svg {
      color: #f7cac9;
    }
  }
  div:nth-child(3) {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    width: 120px;
    height: 25px;

    svg {
      color: #f7cac9;
    }
  }
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;

    width: 60%;

    padding-left: 1rem;
    @media screen and (min-width: 820px) {
      justify-content: center;
    }

    svg {
      margin-right: 20px;
    }
    p {
      font-size: 18px;
      color: #333333;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 820px) {
    /* display: none; */
  }
`
