import React from "react"
import styled from "styled-components"
import LogoImg, { LogoContainer } from "./ImgNote.tsx";
import TextPrin, { LoginContainer } from "./TextPincipal.tsx";

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    // box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`;

const Login = () => {
    return (
        <Container>
            <TextPrin/>
            <LogoImg/>
        </Container>
    );
  };
  
  export default Login;