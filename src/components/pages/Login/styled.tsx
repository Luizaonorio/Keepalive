import React, { useRef, useState } from "react";
import styled from "styled-components";
import logoC from "../../../assets/Logo-Compasso.png";
import logoNote from "../../../assets/notebook.png";
import { errorColor, textColor, white } from "../../../UI/variaveis";
import iconP from "../../../assets/icone-perfil.svg";
import { useNavigate } from "react-router-dom";
import iconC from "../../../assets/icone-senha.svg";

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
    color: #FFFFFF;
    font-weight: 400;
`

const StyleP = styled.p`
    font-size: 0.8vw;
    color: ${textColor};
    font-weight: 100;
    padding: 1.6vh 5.2vw 12.5vh 0;
`

const InputF = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const InputDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const Icone = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: 3vh;
    margin: 2.7vh 0 0 20.5vw;
`

const TextLabel = styled.label`
    font-weight: 300;
    font-size: 30px;
    color: #FFFFFF;
`;

const InvalidText = styled.div`
    margin: 2.5vh 0 0 2.3vw;
    display: flex;
    width: 14.7vw;
    margin-bottom: -6vh;
`

const InvalidP = styled.p`
    text-align: center;
    color: ${errorColor};
    font-size: 0.8vw;
`

const Btn = styled.button`
    margin-top: 10.7vh;
    width: 90.6%;
    height: 6.2vh;
    border-color: transparent;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    color: #FFFFFF;
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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const [focus, setFocus] = useState({
        username: false,
        password: false,
    });
    const usernameref:any = useRef(null)
    const passwordref:any = useRef(null)

    function Valid(e: any) {
        e.preventDefault();

        let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
        if (emailRegex.test(email) && password.length > 3) {
            setError(false);
            navigate('/home')
        } else { setError(true);
        }
    }

    function checkFocus() {

        if (document.activeElement === passwordref.current) { setFocus({...focus, password: true}) }
        if (document.activeElement === usernameref.current) { setFocus({...focus, username: true}) }

        setPassword(passwordref.current.value);
        setEmail(usernameref.current.value);
        
        if (passwordref.current.value === "" ) {setFocus({ ...focus, password: false})}
        if (usernameref.current.value === "" ) {setFocus({ ...focus, username: false})}
    }

    return (
      <Container>
        <LoginContainer>
            <LoginContent>
                <StyleH1>Olá,</StyleH1>
                <StyleP>Para continuar navegando de forma segura, efetue o login na rede.</StyleP>
                <><TextLabel>Login</TextLabel>
                 <InputF onSubmit={Valid}>
                    <InputDiv>
                        <Input ref={usernameref} style={{borderColor: `${error ? "#E9B425" : "white"}`}} onChange={()=> checkFocus()}
                        type="text" 
                        placeholder="Usúarios"/>
                        <Icone style={{marginLeft: `${focus.username ? "17.5vw" : "20.5vw"}`}} src={iconP} alt="Logo Compass.Oul"/>
                    </InputDiv>
                    <InputDiv>
                        <Input ref={passwordref} style={{borderColor: `${error ? "#E9B425" : "white"}`}} onChange={()=> checkFocus()} 
                        type="password" 
                        placeholder="Senha"/>
                        <Icone style={{marginLeft: `${focus.password ? "17.5vw" : "20.5vw"}`}} src={iconC} alt="Logo Compass.Oul"/>
                    </InputDiv>
                    { error ? <InvalidText><InvalidP>Ops, usuário ou senha inválidos. Tente novamente!</InvalidP></InvalidText> : ""}
                    <Btn>Continuar</Btn>
                 </InputF></>
            </LoginContent>
        </LoginContainer>
        <LogoContainer>
            <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
        </LogoContainer>
      </Container>
    );
  };
  
  export default Login;