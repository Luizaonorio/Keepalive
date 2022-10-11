import styled from "styled-components";
import logoC from "../../assets/Logo-Compasso.png";
import logoNote from "../../assets/notebook.png";
import { errorColor, textColor, white } from "../../UI/variaveis";

export const Container = styled.section`
    display: flex;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    overflow: hidden;

    @media screen and (max-height: 1000px) and (orientation: landscape) {
        min-height: 1000px;
    }
`

export const LoginContainer = styled.div`
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1023px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const LoginBack = styled.div`
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

export const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 43%;

    @media screen and (max-width:1023px) {
        width: 90%;
      }

    @media screen and (max-height: 669px) {
        margin-top: 16%;
    }
`

export const StyleH1 = styled.h1`
    font-size: 3.75rem;
    color: ${white};
    font-weight: 400;
    margin-bottom: 3%;
`

export const StyleP = styled.p`
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

export const TextLabel = styled.label`
    font-weight: 300;
    font-size: 1.875rem;
    color: #FFFFFF;
    margin-top: 33%;
`

export const LogoContainer = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${logoNote});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width:1023px) {
        display: none;
    }

    @media screen and (max-height: 1080px) {
        background-position: 82% 51%;
    }
`

export const LogoCompassDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
`

export const LogoCompassDivLeft = styled.div`
    display: none;
    justify-content: center;
    margin-top: 3%;

    @media screen and (max-width:1023px) {
        display: flex;
        align-self: center;
    }    
`

export const LogoCompass = styled.img`
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
`