import React from "react";
import styled from "styled-components";
import logoC from "../../../assets/Logo-Compasso.png";
import logoNote from "../../../assets/notebook.png";
import { textColor, white } from "../../../UI/variaveis";

const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    // box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`;

const LoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
`;

const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 18.3vh 13.4vw 18.2vh 14.9vw ;
`

const StyleH1 = styled.h1`
    font-size: 3.12vw;
    color: ${textColor};
    font-weight: 400;
`

const StyleP = styled.p`
    font-size: 0.8vw;
    color: ${textColor};
    font-weight: 100;
    padding: 1.6vh 5.2vw 12.5vh 0;
`

const InputF = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Input = styled.input`
    width: 90.6%;
    height: 5.7vh;
    margin-top: 3vh;
    border: 1px solid #FFFFFF;
    background: #26292C;
    border-radius: 50px;
    padding: 20px;
    color: ${textColor};
`;

const TextLabel = styled.label`
    font-weight: 300;
    font-size: 30px;
`;

const Btn = styled.button`
    margin-top: 10.7vh;
    width: 90.6%;
    height: 6.2vh;
    border-color: transparent;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
`;

const LogoContainer = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${logoNote});
    background-repeat: no-repeat;
    background-size: cover;
`;

const LogoCompass = styled.img`
    margin: 3.2vh 17vw;
    width: 15.9vw;
    image: url(${logoC});
    z-index: 3;
`;


const Login = () => {
    return (
      <Container>
        <LoginContainer>
            <LoginContent>
                <StyleH1>Olá,</StyleH1>
                <StyleP>Para continuar navegando de forma segura, efetue o login na rede.</StyleP>
                <><TextLabel>Login</TextLabel>
                 <InputF>
                    <Input type="text" placeholder="Usúarios"/>
                    <Input type="password" placeholder="Senha"/>
                 </InputF></>
                 <Btn>Continuar</Btn>
            </LoginContent>
        </LoginContainer>
        <LogoContainer>
            <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
        </LogoContainer>
      </Container>
    );
  };
  
  export default Login;