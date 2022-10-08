import iconP from "../../../assets/icone-perfil.svg";
import { useNavigate } from "react-router-dom";
import iconC from "../../../assets/icone-senha.svg";
import React, { useRef, useState } from "react";
import { Container, LogoCompass, LogoCompassLeft, LogoCompassWrapper, LogoContainer, RegistrationBackground, RegistrationContainer, RegistrationContent, StyleH1, StyleText, TextLabel } from "./styled";
import logoC from "../../assets/Logo-Compasso.png";

export const Register = () => {

  return (
          <Container>
            <RegistrationContainer>
                <RegistrationBackground>
                     <RegistrationContent>
                        <LogoCompassLeft><LogoCompass src={logoC} alt="Logo Compass.Oul"/></LogoCompassLeft>
                        <StyleH1>Olá,</StyleH1>
                        <StyleText>Efetue o preenchimento do formulário abaixo para o cadastro</StyleText>
                        <TextLabel>Cadastre-se</TextLabel>
                        <Register/>
                     </RegistrationContent>
                </RegistrationBackground>
            </RegistrationContainer>
            <LogoContainer>
                <LogoCompassWrapper>
                    <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
                </LogoCompassWrapper>
            </LogoContainer>
          </Container>
      )
  }

  export default Register;