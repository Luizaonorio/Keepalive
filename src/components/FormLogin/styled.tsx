import styled from "styled-components";
import { errorColor, redTextColor, textColor, white } from "../../UI/variaveis";


export const InputF = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8%;
`

export const Input = styled.input`
    width: 90.6%;
    border: 1px solid #FFFFFF;
    background: #26292C;
    border-radius: 50px;
    padding: 21px;
    color: ${textColor};

    @media screen and (max-width: 1440px) and (min-width: 1023px) {
        padding: 13px;
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
`
type IButton = any

export const Icone = styled.img<IButton>`
    position: absolute;
    width: 20px;
    height: 20px;
    transition: 1s;
    margin-left: ${({move}) => move ? "17vw" : "20.5vw"};
    
    @media screen and (max-width:1023px) {
        margin-left: ${({move}) => move ? "39vw" : "47vw"};
    }

    @media screen and (max-height: 669px) {
        margin-left: ${({move}) => move ? "39vw" : "39vw"};
    }

    @media screen and (max-width: 580px) {
        margin-left: ${({move}) => move ? "55vw" : "55vw"};
    }

    @media screen and (max-width: 390px) {
        margin-left: ${({move}) => move ? "59vw" : "59vw"};
    }
`

export const InvalidText = styled.div`
    display: flex;
    align-self: center;
    width: 67.7%;
    margin-right: 11%;
    margin-bottom: -6%;
    align-items: center;
    justify-content: center;
`

export const InvalidP = styled.p`
    text-align: center;
    color: ${errorColor};
    margin-top: 8%;
    margin-bottom: -12%;

    @media screen and (max-width: 1023px) {
        font-size: 0.875rem;
    }
`

export const ButtonContinue = styled.button`
    margin-top: 7.7%;
    width: 90.6%;
    padding: 21px;
    border-color: transparent;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    color: #FFFFFF;

    @media screen and (max-width: 1333px) and (min-width: 1023px) {
        padding: 16px;
    }

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
`

export const TextGoRegister = styled.div`
    display: flex;
    color: ${white};
`

export const WordGoRegister = styled.button`
    color: ${redTextColor};
`