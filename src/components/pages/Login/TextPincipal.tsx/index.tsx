import React from "react";
import styled from "styled-components";
import { textColor } from "../../../../UI/variaveis";
import BtnR from "../ButtonContinue.tsx/Button";
import InputForm from "../form";

export const LoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 18.3vh 13.4vw 18.2vh 14.9vw ;
`

export const StyleH1 = styled.h1`
    font-size: 3.12vw;
    color: ${textColor};
    font-weight: 400;
`

export const StyleP = styled.p`
    font-size: 0.8vw;
    color: ${textColor};
    font-weight: 100;
    padding: 1.6vh 5.2vw 12.5vh 0;

`

const TextPrin = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <StyleH1>Olá,</StyleH1>
        <StyleP>Para continuar navegando de forma segura, efetue o login na rede.</StyleP>
        <InputForm/>
        <BtnR/>
      </LoginContent>
    </LoginContainer>
  );
};

export default TextPrin;