import React from "react"
import styled from "styled-components"

export const Btn = styled.button`
    margin-top: 10.7vh;
    width: 90.6%;
    height: 6.2vh;
    border-color: transparent;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
`;

const BtnR = () => {
  return (
    <Btn>Continuar</Btn>
  );
};

export default BtnR;