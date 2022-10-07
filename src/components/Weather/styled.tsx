import styled from "styled-components"
import { darkTextColor } from "../../UI/variaveis"

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 6.3%;
  margin: 2.3% 2.1% 0 0;

  @media screen and (max-width:1200px) {
    width: 40%;
    text-align: end;
  }

  @media screen and (max-width: 460px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 460px) {
    padding: 0 4%;
  }
`

export const Paragraph = styled.p`
  color: ${darkTextColor};
  font-size: 0.875rem;
  @media screen and (max-width:1200px) {
    width: 100%;
  }
`
export const DivWeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width:1200px) {
    justify-content: flex-end;
  }
`

export const IconWeader = styled.img`
  width: 34px;
  heigth: 34px;

  @media screen and (max-width: 460px) {
    width: 26px;
  }
`

export const TemperatureNumber = styled.p`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 460px) {
    font-size: 2rem;
  }
`