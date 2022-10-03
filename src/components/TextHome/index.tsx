import styled from 'styled-components';
import { darkTextColor, redTextColor } from "../../UI/variaveis";

const TextPrincipal = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 6.9vw 0 0;
  word-wrap: break-word;
`
const PrincipalTitle = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${redTextColor};
  word-wrap: break-word;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  color: ${redTextColor};
  word-wrap: break-word;
`
const Text = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${darkTextColor};
  word-wrap: break-word;
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