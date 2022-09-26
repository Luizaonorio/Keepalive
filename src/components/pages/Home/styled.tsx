import React from "react";
import styled from "styled-components";
import LogoCompassOul from "../../../assets/LogoCompassoBlack.png";
import { darkTextColor, white } from "../../../UI/variaveis";
import TextHome from "../../TextHome/index";

 export const ConteinerHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${white};
`;

export const PatterHeader = styled.div`
  height: 15.7vh;
  width: 100vw;
  padding: 2.3vh 2.1vw 0 2.1vw;
  display: flex;
  justify-content: space-between;
  background-color: Red;
`;

// export const LogoCompass = styled.div`
//   height: 3.9vh;
//   width: 7.8vw;
//   background-image: url(${LogoCompassOul});
// `

export const Logo = styled.img`
  height: 3.9vh;
  width: 7.8vw;
  background-image: url(${LogoCompassOul});
`

export const Clock = styled.div`
  heigth: 13.3vh;
  width: 17vw;
  background-color: Black;
`

export const Temperature = styled.div`
  width: 6.3vw;
  background-color: Black;
`

const Paragraph = styled.p`
  color: ${darkTextColor};
`

export const SectionText = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
`

const DivText = styled.span`
  margin-top: 15vh;
  heigth: 36vw
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 9.3vh;
  width: 100vw;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
`

export const Seconds = styled.div`
  background-color: Red;
  margin: 0 19.2vw 0 1.7vw;

`

export const TextRefresh = styled.div`
background-color: Red;
margin-left: 6.4vw;
`

export const Line = styled.div`
background-color: ${white};
heigth: 3.1vh;
width: 0.1vw;
`

export const InfoText = styled.div`
  display: flex;
  background-color: Red;
  margin: 3vh;
  heigth: 53vh;
  width: 28.1vw;
  font-size: 12px;
`

export const Btn = styled.button`
  height: 9.3vh;
  width: 6.8vw;
  background-color: Red;
`

const TextPrincipal = [
  {
      title: "Our mission is",
      text: "Nossa missão é"
  },
  {
      title: "to transform the world",
      text: "transformar o mundo"
  },
  {
      title: "building digital experiences",
      text: "construindo experiências digitais"
  },
  {
      title: "that enable our client’s growth",
      text: "que permitam o crescimento dos nossos clientes"
  }
]
 
const Home = () => {

  return (
    <ConteinerHome>
      <PatterHeader>
        {/* <LogoCompass> */}
          <Logo/>
        {/* </LogoCompass> */}
        <Clock/>
        <Temperature>
        <Paragraph>Passo Fundo - RS</Paragraph>
        </Temperature>
      </PatterHeader>
      <SectionText>
        < DivText>
        <TextHome title={TextPrincipal[0].title} text={TextPrincipal[0].text} size={36} />
          <TextHome title={TextPrincipal[1].title} text={TextPrincipal[1].text} size={64} />
          <TextHome title={TextPrincipal[2].title} text={TextPrincipal[2].text} size={64} />
          <TextHome title={TextPrincipal[3].title} text={TextPrincipal[3].text} size={64} />  
        </DivText> 
      </SectionText>
      <Footer>
        <InfoText>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</InfoText>
        <Line/>
        <TextRefresh>Application refresh in</TextRefresh>
        <Seconds>66</Seconds>
        <Btn>Continuar Navegando</Btn>
        <Btn>Logout</Btn>
      </Footer>
    </ConteinerHome>
  );
};

export default Home;