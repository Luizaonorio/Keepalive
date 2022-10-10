import styled from "styled-components";
import { white } from "../../UI/variaveis";

export const FooterLogin = styled.div`
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

export const NameUser = styled.div `
  display: flex;
  margin: 1.82%;
  width: 18%;

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

export const InfoP = styled.p`
font-size: 0.75rem;
text-align: right;
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