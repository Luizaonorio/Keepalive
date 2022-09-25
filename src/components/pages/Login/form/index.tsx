import React from "react"
import styled from "styled-components"
import { textColor, white } from "../../../../UI/variaveis";

export const InputF = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Input = styled.input`
    width: 90.6%;
    height: 5.7vh;
    margin-top: 3vh;
    border-color: rgb(255 255 255);
    border: 1px solid #FFF;
    background: #26292C;
    border-radius: 50px;
    padding: 20px;
    color: ${textColor};
`;

export const TextLabel = styled.label`
    font-weight: 300;
    font-size: 30px;
`;

const InputForm = () => {
    return (
        <><TextLabel>Login</TextLabel><InputF>
            <Input type="text" placeholder="Usúarios"></Input>
            <Input type="password" placeholder="Senha"></Input>
        </InputF></>
    );
  };
  
  export default InputForm;