import { ButtonContinue, ButtonLogout } from "../Button/styled";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";

export default function Buttons() {

  const navigate = useNavigate();
  const signOutClick = () => {
    auth.signOut(); 
    console.log("deu ruim")
    navigate('/');
  }

  return(
    <><ButtonContinue onClick={() => window.open("//www.google.com", "_blank")}>Continuar <br />Navegando
    </ButtonContinue>
    <ButtonLogout onClick={signOutClick}>Logout</ButtonLogout></>
  )
}