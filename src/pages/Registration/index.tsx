import iconP from "../../../assets/icone-perfil.svg";
import { useNavigate} from "react-router-dom";
import iconC from "../../../assets/icone-senha.svg";
import React, { useEffect, useRef, useState } from "react";
import { Container, LogoCompass, LogoCompassLeft, LogoCompassWrapper, LogoContainer, RegistrationBackground, RegistrationContainer, RegistrationContent, StyleH1, StyleText, TextLabel } from "./styled";
import logoC from "../../assets/Logo-Compasso.png";
import FormRegister from "../../components/FormRegistration";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

export const Register = () => {
    const navigate = useNavigate();
    
    useEffect(() => onAuthStateChanged(auth, user =>
        user && navigate('/home')
    ), [])

  return (
          <Container>
            <RegistrationContainer>
                <RegistrationBackground>
                     <RegistrationContent>
                        <LogoCompassLeft><LogoCompass src={logoC} alt="Logo Compass.Oul"/></LogoCompassLeft>
                        <StyleH1>Olá,</StyleH1>
                        <StyleText>Efetue o preenchimento do formulário abaixo para o cadastro:</StyleText>
                        <TextLabel>Cadastre-se</TextLabel>
                        <FormRegister/>
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