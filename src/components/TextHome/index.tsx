import React from "react";
import styled from 'styled-components';
import { darkTextColor, redTextColor } from "../../UI/variaveis";

const TextT = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 6.9vw 0 0;
`
const Title = styled.h1<{ size: number }>`
  font-weight: 700;
  font-size: ${({ size }) => size}rem;
  color: ${redTextColor};
`
const Text = styled.p`
  font-weight: 400;
  color: ${darkTextColor};
  font-size: 1.2vw;
`

interface IText {
    title: string;
    text: string;
    size: number
}

export default function TextHome({ title, text, size }: IText) {
    return (
        <TextT>
            <Title size={size}>{title}</Title>
            <Text>{text}</Text>
        </TextT>
    )
}