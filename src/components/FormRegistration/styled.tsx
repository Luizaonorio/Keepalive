import styled from "styled-components";
import { errorColor, redTextColor, textColor, white } from "../../UI/variaveis";


export const InputsFormRegister = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputWrapped = styled.div`
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
type IButton = any;

export const IconCheck = styled.i<IButton>`
    display: ${({appear} : any) => appear ? "block" : "none"};
    position: absolute;
    transition: 1s;
    color: gray;
    margin-left: 390px;

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
    margin-top: 6%;
    margin-bottom: 4%;

    @media screen and (max-width: 1023px) {
        font-size: 0.875rem;
    }
`

export const ButtonCreate = styled.button`
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

export const TextGoLogin = styled.div`
    width: 90.6%;
    text-align: center;
    color: ${white};
`

export const WordGoLogin = styled.span`
    color: ${redTextColor};
    cursor: pointer;
    margin-left: 5px;
`
