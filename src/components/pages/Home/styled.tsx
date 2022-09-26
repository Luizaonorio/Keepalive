import React from "react";
import styled from "styled-components";
import LogoCompassOul from "../../../assets/Logo-Compasso.png";

 export const Conteiner = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const PatterHeader = styled.div`
  height: 15.7vh;
  width: 100vw;
  padding: 2.3vh 2.1vw 0 2.1vw;
  display: flex;
  justify-content: space-between;
  background-color: Red;
`;

export const LogoCompass = styled.div`
  height: 3.9vh;
  width: 7.8vw;
  background-image: url(${LogoCompassOul});
`

export const Logo = styled.img`
  background-image: url(${LogoCompassOul});
`

export const Clock = styled.div`
  heigth: 13.3vh;
  width: 17vw;
  background-color: Black;
`

export const Temperature = styled.div`
  heigth: 7.2vh;
  width: 6.3vw;
  background-color: Black;
`

export const SectionText = styled.div`
  height: 75vh;
  display: flex;
  justify-content: flex-end;
`

export const TextT = styled.div`
  height: 35.6vh;
  width: 52.5vw;
  margin: 15.3vh 6.9vw 0 0;
  background-color: Black;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 9.3vh;
  width: 100vw;
  background-color: Black;
`

export const Seconds = styled.div`
  margin: 0 19.2vw 0 0 0;
  background-color: Red;

`

export const TextRefresh = styled.div`
background-color: Red;
`

export const Line = styled.div`
background-color: white;
heigth: 3.1vh;
width: 0.1vw;
`

export const InfoText = styled.div`
background-color: Red;
`

export const Btn = styled.button`
  height: 9.3vh;
  width: 6.8vw;
  background-color: Red;
`
 
const Home = () => {
  return (
    <Conteiner>
      <PatterHeader>
        <LogoCompass>
          <Logo/>
        </LogoCompass>
        <Clock/>
        <Temperature/>
      </PatterHeader>
      <SectionText>
        <TextT/>
      </SectionText>
      <Footer>
        <InfoText>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</InfoText>
        <Line/>
        <TextRefresh>Application refresh in</TextRefresh>
        <Seconds>66</Seconds>
        <Btn>Continuar Navegando</Btn>
        <Btn>Logout</Btn>
      </Footer>
    </Conteiner>
  );
};

export default Home;