import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoCompassOul from "../../../assets/LogoCompassoBlack.png";
import { darkTextColor, redTextColor, textColor, white } from "../../../UI/variaveis";
import TextHome from "../../TextHome/index";
import bolaLogoCompasso from "../../../assets/bola-LogoCompasso.png"
import { useNavigate } from "react-router-dom";
import Location from "../../../components/pages/Home/index"

 export const ConteinerHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${white};
  background-image: url(${bolaLogoCompasso});
  background-repeat: no-repeat;
  background-position: 0 87%;

  @media screen and (max-width: 1656px) {
    background-position: -10% 97%;
  }

  @media screen and (max-width: 1562px) {
    background-position: -20% 127%;
  }

  @media screen and (max-width: 1471px) {
    background-position: -29% 134%;
  }

  @media screen and (max-width: 1405px) {
    background-position: -39% 140%;
  }

  @media screen and (max-width: 1342px) {
    background-position: -54% 134%;
  }

  @media screen and (max-width: 1265px) {
    background-position: -65% 134%;
  }

  @media screen and (max-width: 1217px) {
    background-position: -75% 134%;
  }
  
  @media screen and (max-width:1200px) {
    background-image: none;
  }

  @media screen and (max-height: 900px) {
    min-height: 900px;
  }
`;

export const PatterHeader = styled.div`
  height: 16.6%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:1200px) {
    justify-content: space-evenly;
    height: 10%;
  }
`

export const LogoCompass = styled.div`
  margin: 2.3vh 0 0 2.1vw;
  height: 3rem;

  @media screen and (max-width: 440px) {
    height: 2.1rem;
  }
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
  box-sizing: border-box; 

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

const Time = styled.p`
  display: flex;
  height: 85%;
  font-size: 9rem;
  font-weight: 700;

  @media screen and (max-height: 978px) {
    font-size: 8rem;
  }
`

const Data = styled.p`
  font-size: 0.875rem;
`

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 6.3%;
  margin: 2.3% 2.1% 0 0;

  @media screen and (max-width:1200px) {
    width: 40%;
    text-align: end;
  }

  @media screen and (max-width: 460px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 460px) {
    padding: 0 4%;
  }
`

export const Paragraph = styled.p`
  color: ${darkTextColor};
  font-size: 0.875rem;
  @media screen and (max-width:1200px) {
    width: 100%;
  }
`
export const DivWeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width:1200px) {
    justify-content: flex-end;
  }
`

export const IconWeader = styled.img`
  width: 34px;
  heigth: 34px;

  @media screen and (max-width: 460px) {
    width: 26px;
  }
`

export const TemperatureNumber = styled.p`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 460px) {
    font-size: 2rem;
  }
`

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

const DivText = styled.div`
  margin-top: 10%;
  text-align: right;

  @media screen and (max-width: 1200px) {
    margin: 0;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 9.3%;
  width: 100%;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: ${white};
  z-index: 999;

  @media screen and (max-width:1200px) {
    height: 40%;
    flex-direction: column;
    align-items: center;
  }
`

export const Seconds = styled.div`
  text-align: center;
  width: 23%;

  @media screen and (max-width:1200px) {
    margin: 0;
    width: 58%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 795px) {
    width: 64%;
  }

  @media screen and (max-width: 645px) {
    width: 61%;
    // height: 27%;
  }

  // @media screen and (max-width: 795px) {
  //   width: 64%;
  // }
`

const ParagraphNumber = styled.p`
    height: 53%;
    font-size: 3rem;

    @media screen and (max-width:1200px) {
      width: 38%;
    }

    @media screen and (max-width: 795px) {
      width: 50%;
    }

    @media screen and (max-width: 645px) {
      width: 59%;
      font-size: 2rem;
      margin: 0;
    }
`

const ParagraphSeconds = styled.p`
  font-size: 0.875rem;

  @media screen and (max-width:1200px) {
    display: flex;
    align-items: center;
  }
`

export const SecondsDiv = styled.div`
  display: flex;
  width: 32%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:1200px) {
    justify-content: space-between;
    width: 40%;
  }

  @media screen and (max-width: 645px) {
    width: 59%;
    margin: 7% 0;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`

export const TextRefresh = styled.div`
  // margin-left: 6.4%;
  text-align: right;
  font-size: 0.875rem;

  @media screen and (max-width:1200px) {
    justify-content: center;
    margin-left: 0;
  }

  @media screen and (max-width: 795px) {
    margin-right: none;
  }

  @media screen and (max-width: 645px) {
    margin: 0;
  }

  @media screen and (max-width: 355px) {
    font-size: 0.875rem;
  }
`

export const Line = styled.div`
background-color: ${white};
width: 2px;
height: 48px;
margin-left: 1.82%;

@media screen and (max-width:1200px) {
  display: none;
}
`

export const InfoText = styled.div`
  display: flex;
  margin: 1.82%;
  width: 28.1%;

  @media screen and (max-width:1200px) {
    width: 60%;
    height: 20%;
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 440px) {
    width: 80%;
  }
`

const InfoP = styled.p`
font-size: 0.75rem;
text-align: right;
`

export const Btn = styled.button`
  height: 100%;
  width: 6.8%;
  border: none;
  color: ${redTextColor};
  background: white;

  @media screen and (max-width:1200px) {
    width: 100%;
    height: 20%;
  }
`

export const Btn2 = styled.button`
  height: 100%;
  width: 6.8%;
  border: none;
  color: ${textColor};
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

  @media screen and (max-width:1200px) {
    width: 100%;
    height: 20%;
  }
`
 
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
        < DivText>
        <TextHome /> 
        </DivText> 
      </SectionText>
      <Footer>
        <InfoText>
          <InfoP>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
          </InfoP>
        </InfoText>
        <Line/>
        <SecondsDiv>
        <TextRefresh>Application <br/>refresh in</TextRefresh>
        <Seconds>
            <ParagraphNumber><Refresh/></ParagraphNumber>
            <ParagraphSeconds>Seconds</ParagraphSeconds>
          </Seconds>
        </SecondsDiv>        
        <Btn onClick = {() => window.open("//www.google.com", "_blank")}>Continuar <br/>Navegando</Btn>
        <Btn2 onClick = {() => navigate("/")}>Logout</Btn2>
      </Footer>
    </ConteinerHome>
  );
};

export default Home;

function setDateState(arg0: Date) {
  throw new Error("Function not implemented.");
}

