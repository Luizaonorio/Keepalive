import { FooterLogin, InfoText, InfoP, Line } from '../Footer/styled';
import Refresh from "../Footer/Refresh";
import Buttons from "../Footer/Button";


export default function Footer() {
  return (
    <FooterLogin>
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