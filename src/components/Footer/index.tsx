import { FooterLogin, InfoText, InfoP, Line, NameUser } from '../Footer/styled';
import Refresh from "../Footer/Refresh";
import Buttons from "../Footer/Button";
import {auth} from "../../Firebase";

export default function Footer() {

  return (
    <FooterLogin>
    <NameUser>Olá, {auth.currentUser?.displayName}</NameUser>
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