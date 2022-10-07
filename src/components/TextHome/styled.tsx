import styled from "styled-components"
import { darkTextColor, redTextColor } from "../../UI/variaveis"

export const SectionText = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: 10;
  height: 74.1%;

  @media screen and (max-width:1200px) {
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

export const DivText = styled.div`
  margin-top: 10%;
  text-align: right;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`

export const TextPrincipal = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 6.9%;
  word-wrap: break-word;
`

export const PrincipalTitle = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${redTextColor};
  word-wrap: break-word;

  @media screen and (max-width: 1070px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 816px) {
    font-size: 1.5rem;
    margin-bottom: 2%;
  }

  @media screen and (max-width: 624px) {
    font-size: 1.2rem;
    margin-top: 4%;
    margin-bottom: 2%;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  color: ${redTextColor};
  word-wrap: break-word;

  @media screen and (max-width: 1070px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 816px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 690px) {
    font-size: 2rem;
    margin: 2% 0 0.1% 0;
  }

  @media screen and (max-width: 560px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 317px) {
    font-size: 1.9rem;
  }
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${darkTextColor};
  word-wrap: break-word;

  @media screen and (max-width: 1070px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 816px) {
    margin-bottom: 2%;
  }

  @media screen and (max-width: 585px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 317px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }
`

