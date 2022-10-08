import iconP from "../../../assets/icone-perfil.svg";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import React, { useRef, useState } from "react";
import { Container, LoginBack, LoginContainer, LoginContent, LogoCompass, LogoCompassDiv, LogoCompassDivLeft, LogoContainer, StyleH1, StyleP, TextLabel } from "./styled";
import logoC from "../../assets/Logo-Compasso.png";

export const Login = () => {

    return (
            <Container>
              <LoginContainer>
                  <LoginBack>
                       <LoginContent>
                          <LogoCompassDivLeft><LogoCompass src={logoC} alt="Logo Compass.Oul"/></LogoCompassDivLeft>
                          <StyleH1>Olá,</StyleH1>
                          <StyleP>Para continuar navegando de forma segura, efetue o login na rede.</StyleP>
                          <TextLabel>Login</TextLabel>
                          <FormLogin/>
                       </LoginContent>
                  </LoginBack>
              </LoginContainer>
              <LogoContainer>
                  <LogoCompassDiv>
                      <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
                  </LogoCompassDiv>
              </LogoContainer>
            </Container>
        )
    }
  
  export default Login;

  function PopUp(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
}
