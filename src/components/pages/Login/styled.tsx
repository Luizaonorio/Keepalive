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
    overflow: hidden;

    @media screen and (max-height: 800px) {
        min-height: 800px;
      }
`;

const LoginContainer = styled.div`
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1023px) {
        display: flex;
        justify-content: center;
        width: 100%;
      }
`;

const LoginBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;

    @media screen and (max-width: 1023px) {
        width: 55%;
      }
     
    @media screen and (max-width: 575px) {
        width: 71%;
    }

    @media screen and (max-width: 390px) {
        width: 80%;
    }
`

const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 43%;
    // margin: 18.3% 13.4% 18.2% 14.9%;

    @media screen and (max-width:1023px) {
        width: 90%;
      }

    @media screen and (max-height: 669px) {
        margin-top: 16%;
    }
`

const StyleH1 = styled.h1`
    font-size: 3.75rem;
    color: #FFFFFF;
    font-weight: 400;
    margin-bottom: 3%;
`

const StyleP = styled.p`
    color: ${textColor};
    font-weight: 100;
    width: 80%;
    
    @media screen and (max-height: 669px) {
        padding-bottom: 8%;
    }

    @media screen and (max-width: 475px) {
        width: 100%;
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
    margin-top: 8%;

`

const Input = styled.input`
    width: 90.6%;
    border: 1px solid #FFFFFF;
    background: #26292C;
    border-radius: 50px;
    padding: 21px;
    color: ${textColor};

    @media screen and (max-width: 580px) {
        padding: 18px;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        padding: 16px;
    }

    @media screen and (max-width: 320px) {
        padding: 13px;
    }
`;

const Icone = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    transition: 1s;
    margin-left: ${({saindo}) => saindo ? "17vw" : "20.5vw"};
    
    @media screen and (max-width:1023px) {
        margin-left: ${({saindo}) => saindo ? "39vw" : "47vw"};
      }

      @media screen and (max-height: 669px) {
        margin-left: ${({saindo}) => saindo ? "39vw" : "39vw"};
    }

    @media screen and (max-width: 580px) {
        margin-left: ${({saindo}) => saindo ? "55vw" : "55vw"};
    }

    @media screen and (max-width: 390px) {
        margin-left: ${({saindo}) => saindo ? "59vw" : "59vw"};
    }
`

const TextLabel = styled.label`
    font-weight: 300;
    font-size: 1.875rem;
    color: #FFFFFF;
    margin-top: 33%;
`;

const InvalidText = styled.div`
    display: flex;
    align-self: center;
    width: 67.7%;
    margin-right: 11%;
    margin-bottom: -6%;
    align-items: center;
    justify-content: center;
`

const InvalidP = styled.p`
    text-align: center;
    color: ${errorColor};
    margin-top: 8%;
    margin-bottom: -12%;

    @media screen and (max-width: 1023px) {
        font-size: 0.875rem;
      }
`

const Btn = styled.button`
    margin-top: 25.7%;
    width: 90.6%;
    padding: 21px;
    border-color: transparent;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    color: #FFFFFF;

    @media screen and (max-height: 669px) {
        margin-top: 6%;
    }

    @media screen and (max-width: 580px) {
        padding: 18px;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        padding: 16px;
    }

    @media screen and (max-width: 320px) {
        padding: 13px;
    }
`;

const LogoContainer = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${logoNote});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width:1023px) {
        display: none;
      }
`;

const LogoCompassDiv = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 3%;
`;

const LogoCompassDivLeft = styled.div`
      display: none;
      justify-content: center;
      margin-top: 3%;

      @media screen and (max-width:1023px) {
        display: flex;
        align-self: center;
      }

    
`;

const LogoCompass = styled.img`
    image: url(${logoC});
    z-index: 3;
    margin-bottom: 29%;

    @media screen and (max-width: 570px) {
        width: 230px;
        height: 50px;
    }

    @media screen and (max-width: 315px) {
        width: 180px;
        height: 36px;
    }

    @media screen and (max-width:1023px), (max-height:767px) {
        margin-top: 10%;
        margin-bottom: 8%;
      }
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
            <LoginBack>
                <LoginContent>
                    <LogoCompassDivLeft><LogoCompass src={logoC} alt="Logo Compass.Oul"/></LogoCompassDivLeft>
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
            </LoginBack>
        </LoginContainer>
        <LogoContainer>
            <LogoCompassDiv>
                <LogoCompass src={logoC} alt="Logo Compass.Oul"/>
            </LogoCompassDiv>
        </LogoContainer>
      </Container>
    );
  };
  
  export default Login;

function PopUp(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
}
