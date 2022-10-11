import { FooterLogin, InfoText, InfoP, Line, NameUser } from '../Footer/styled';
import Refresh from "../Footer/Refresh";
import Buttons from "../Footer/Button";
import {auth} from "../../Firebase";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Footer() {
  
  const [fullName, setFullName] = useState<any>()

  useEffect(() => {
    setTimeout(() => {
       setFullName(auth.currentUser?.displayName?.split(' ')[0]);
    }, 1000)
}, [])

  
  return (
    <FooterLogin>
    <NameUser>Olá, {fullName}</NameUser>
    <InfoText>
      <InfoP>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
      </InfoP>
    </InfoText>
    <Line/>
    <Refresh/>    
    <Buttons/>
  </FooterLogin>
  )
}