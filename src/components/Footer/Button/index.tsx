import { ButtonContinue, ButtonLogout } from "../Button/styled";
import { useNavigate } from "react-router-dom";

export default function Buttons() {

  const navigator = useNavigate();

  return(
    <><ButtonContinue onClick={() => window.open("//www.google.com", "_blank")}>Continuar <br />Navegando
    </ButtonContinue>
    <ButtonLogout onClick={() => navigator("/")}>Logout</ButtonLogout></>
  )
}