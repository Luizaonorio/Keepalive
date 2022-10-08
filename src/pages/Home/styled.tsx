import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoCompassOul from "../../../assets/LogoCompassoBlack.png";
import { darkTextColor, redTextColor, textColor, white } from "../../UI/variaveis";
import bolaLogoCompasso from "../../assets/bola-LogoCompasso.png"

 export const ConteinerHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${white};
  background-image: url(${bolaLogoCompasso});
  background-repeat: no-repeat;
  background-position: 0 87%;

  @media screen and (max-width: 1656px) {
    background-position: -10% 97%;
  }

  @media screen and (max-width: 1562px) {
    background-position: -20% 127%;
  }

  @media screen and (max-width: 1471px) {
    background-position: -29% 134%;
  }

  @media screen and (max-width: 1405px) {
    background-position: -39% 140%;
  }

  @media screen and (max-width: 1342px) {
    background-position: -54% 134%;
  }

  @media screen and (max-width: 1265px) {
    background-position: -65% 134%;
  }

  @media screen and (max-width: 1217px) {
    background-position: -75% 134%;
  }
  
  @media screen and (max-width:1200px) {
    background-image: none;
  }

  @media screen and (max-height: 900px) {
    min-height: 900px;
  }
`;

export const PatterHeader = styled.div`
  height: 16.6%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:1200px) {
    justify-content: space-evenly;
    height: 10%;
  }
`

export const LogoCompass = styled.div`
  margin: 2.3vh 0 0 2.1vw;
  height: 3rem;

  @media screen and (max-width: 440px) {
    height: 2.1rem;
  }
`

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`