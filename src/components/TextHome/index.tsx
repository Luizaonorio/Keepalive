import styled from 'styled-components';
import { darkTextColor, redTextColor } from "../../UI/variaveis";

const TextPrincipal = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 6.9% 0 0;
  word-wrap: break-word;

`
const PrincipalTitle = styled.h1`
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

const Title = styled.h2`
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
    font-size: 1.6rem;
  }

  @media screen and (max-width: 435px) {
    font-size: 1.1rem;
  }
`
const Text = styled.p`
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
    font-size: 0.875rem;
  }
`

export default function TextHome() {
    return (
        <TextPrincipal>
            <PrincipalTitle>Our mission is</PrincipalTitle>
            <Text>Nossa missão é</Text>
            <Title>to transform the world</Title>
            <Text>transformar o mundo</Text>
            <Title>building digital experiences</Title>
            <Text>construindo experiências digitais</Text>
            <Title>that enable our client’s growth</Title>
            <Text>que permitam o crescimento dos nossos clientes</Text>
        </TextPrincipal>
    )
}