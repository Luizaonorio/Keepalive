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
    min-height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    overflow: hidden;
`;

const LoginContainer = styled.div`
    width: 50vw;
    height: 100vh;

    @media screen and (max-width:1023px) {
        display: flex;
        justify-content: center;
        width: 100%;
        background-image: url(${logoC});
        background-repeat: no-repeat;
        background-position: center 8%;
        background-size: 15vh;
      }
`;

const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 18.3vh 13.4vw 18.2vh 14.9vw;

    @media screen and (max-width:1023px) {
        width: 50%;
      }

    @media screen and (max-height: 669px) {
        margin-top: 16vh;
    }
`

const StyleH1 = styled.h1`
    font-size: 3.75rem;
    color: #FFFFFF;
    font-weight: 400;
`

const StyleP = styled.p`
    color: ${textColor};
    font-weight: 100;
    padding: 1.6vh 5.2vw 12.5vh 0;

    
    @media screen and (max-height: 669px) {
        padding-bottom: 8vh;
    }
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
    transition: 1s;
    margin-left: ${({saindo}) => saindo ? "17vw" : "20.5vw"};
    
    @media screen and (max-width:1023px) {
        margin-left: ${({saindo}) => saindo ? "39vw" : "47vw"};
      }

    // @media screen and (max-width: 480px) {
    //  margin-left: ${({saindo}) => saindo ? "29vw" : "39vw"};
    // }
`

const TextLabel = styled.label`
    font-weight: 300;
    font-size: 1.875rem;
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

    @media screen and (max-height: 669px) {
        margin-top: 6vh;
    }
`;

const LogoContainer = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${logoNote});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width:1023px) {
        display: none;
      }
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

    return (
      <Container>
        <LoginContainer>
            <LoginContent>
                <StyleH1>Olá,</StyleH1>
                <StyleP>Para continuar navegando de forma segura, efetue o login na rede.</StyleP>
                <><TextLabel>Login</TextLabel>
                 <InputF onSubmit={Valid}>
                    <InputDiv>
                        <Input onChange= {event =>setEmail(event.target.value)} ref={usernameref} style={{borderColor: `${error ? "#E9B425" : "white"}`}} 
                        type="text" 
                        placeholder="Usúarios"/>
                        <Icone saindo={email} src={iconP} alt="Logo Compass.Oul"/>
                    </InputDiv>
                    <InputDiv>
                        <Input onChange= {event =>setPassword(event.target.value)} ref={passwordref} style={{borderColor: `${error ? "#E9B425" : "white"}`}}  
                        type="password" 
                        placeholder="Senha"/>
                        <Icone saindo={password} src={iconC} alt="Logo Compass.Oul"/>
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

function PopUp(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
}
