import styled from "styled-components";
import { redTextColor, textColor } from "../../../UI/variaveis";

export const ButtonContinue = styled.button`
  height: 100%;
  width: 6.8%;
  border: none;
  color: ${redTextColor};
  background: white;

  @media screen and (max-width:1200px) {
    width: 100%;
    height: 20%;
  }
`

export const ButtonLogout = styled.button`
  height: 100%;
  width: 6.8%;
  border: none;
  color: ${textColor};
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

  @media screen and (max-width:1200px) {
    width: 100%;
    height: 20%;
  }
`