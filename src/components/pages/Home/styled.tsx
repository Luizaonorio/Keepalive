import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoCompassOul from "../../../assets/LogoCompassoBlack.png";
import { darkTextColor, redTextColor, textColor, white } from "../../../UI/variaveis";
import TextHome from "../../TextHome/index";
import bolaLogoCompasso from "../../../assets/bola-LogoCompasso.png"
import { useNavigate } from "react-router-dom";
import OpenWeatherMap from "openweathermap-ts";
import Location from "../../../components/pages/Home/index"

 export const ConteinerHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${white};
  background-image: url(${bolaLogoCompasso});
  background-repeat: no-repeat;
  background-position: 0 87%;
`;

export const PatterHeader = styled.div`
  height: 15.5%;
  width: 100vw;
  // padding: 2.3vh 2.1vw 0 2.1vw;
  display: flex;
  justify-content: space-between;
`;

export const LogoCompass = styled.div`
  height: 3.9vh;
  width: 7.8vw;
`

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`

export const Clock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  // width: 18.5vw;
  box-sizing: border-box; 
  // margin-top: 18vh;
`

const Time = styled.span`
  display: flex;
  text-align: center;
  font-size: 9rem;
  // height: 100px;
  font-weight: 700;
`

const Data = styled.span`
  font-size: 0.875rem;
`

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 6.3vw;
`

export const Paragraph = styled.p`
  color: ${darkTextColor};
  font-size: 0.875rem;
`
export const DivWeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.1vh;
`

export const IconWeader = styled.img`
  width: 1.8vw;
`

export const TemperatureNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;
`

export const SectionText = styled.div`
  position: relative;
  height: 75%;
  display: flex;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: 10;
`

const DivText = styled.span`
  margin-top: 15vh;
  // heigth: 36vw;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 9.3%;
  width: 100vw;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: ${white};
  z-index: 999;
`

export const Seconds = styled.div`
  margin: 0 19.2vw 0 1.7vw;
  text-align: center;
  width: 5vw;
`

const ParagraphNumber = styled.p`
  // text-align: center;
  font-size: 2.5vw;
`

const ParagraphSeconds = styled.p`
font-size: 0.7vw;
`

export const TextRefresh = styled.div`
margin-left: 6.4vw;
text-align: right;
margin-top: 2.9vh;
font-size: 0.8vw;
`

export const Line = styled.div`
background-color: ${white};
width: 0.1vw;
margin: 1.6vh 0 1.8vh 0;
`

export const InfoText = styled.div`
  display: flex;
  margin: 3vh;
  // heigth: 53vh;
  width: 28.1vw;
`

const InfoP = styled.p`
font-size: 0.6vw;
text-align: right;
`

export const Btn = styled.button`
  height: 9.3vh;
  width: 6.8vw;
  border: none;
  color: ${redTextColor};
  background: white;
`

export const Btn2 = styled.button`
  height: 9.3vh;
  width: 6.8vw;
  border: none;
  color: ${textColor};
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
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
interface Props {
  fresh: number;
}

const [counter, setCounter] = useState(600);
const navigate = useNavigate();

    useEffect(() => {
        counter >= 1 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate("/");
    }, [counter]);

function Refresh() {
    return (
      <ParagraphNumber>
            {counter}
      </ParagraphNumber>
    );
  }

  enum Days {
    "domingo" = 0, "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
  }

  enum Month {
    "janeiro"= 0, "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  }

  function DataHora() {
  
  const [dateState, setDateState] = useState(new Date());

  const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const dayWeek = date.getDay()
    const day =  String(date.getDate()).padStart(2, '0');
    const month = date.getMonth();
    const year = date.getFullYear();

    const DateCurrent = `${Days[dayWeek]}, ${day} de ${Month[month]} de ${year}`;
    const HourCurrent = `${hours}:${minutes}`;

    return { Data: DateCurrent, Hora: HourCurrent}
}

  return (
    <ConteinerHome>
      <PatterHeader>
        <LogoCompass>
          <Logo src={LogoCompassOul} alt="Logo Compass.Oul"/>
        </LogoCompass>
        <Clock>
          <Time>{DataHora().Hora}</Time>
          <Data>{DataHora().Data}</Data>
        </Clock>
        <Location/>
      </PatterHeader>
      <SectionText>
        {/* <BallCompass/> */} 
        {/* <img src={bolaLogoCompasso} alt="Girl in a jacket"></img> */}
        < DivText>
        <TextHome title={TextPrincipal[0].title} text={TextPrincipal[0].text} size={1.8} />
          <TextHome title={TextPrincipal[1].title} text={TextPrincipal[1].text} size={3.3} />
          <TextHome title={TextPrincipal[2].title} text={TextPrincipal[2].text} size={3.3} />
          <TextHome title={TextPrincipal[3].title} text={TextPrincipal[3].text} size={3.3} />  
        </DivText> 
      </SectionText>
      <Footer>
        <InfoText>
          <InfoP>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
          </InfoP>
        </InfoText>
        <Line/>
        <TextRefresh>Application <br/>refresh in</TextRefresh>
        <Seconds>
          <ParagraphNumber><Refresh/></ParagraphNumber>
          <ParagraphSeconds>Seconds</ParagraphSeconds>
        </Seconds>
        <Btn onClick = {() => window.open("//www.google.com", "_blank")}>Continuar Navegando</Btn>
        <Btn2 onClick = {() => navigate("/")}>Logout</Btn2>
      </Footer>
    </ConteinerHome>
  );
};

export default Home;

function setDateState(arg0: Date) {
  throw new Error("Function not implemented.");
}

