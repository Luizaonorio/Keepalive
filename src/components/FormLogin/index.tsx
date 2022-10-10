import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputF, InputDiv, Input, Icone, InvalidText, InvalidP, ButtonContinue, TextGoRegister, WordGoRegister } from "../FormLogin/styled";
import { errorColor } from "../../UI/variaveis";
import iconEmail from "../../assets/icone-perfil.svg";
import iconPassword from "../../assets/icone-senha.svg";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../../Firebase";

const FormLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [passwordView, setPasswordView] = useState(true);
  const navigate = useNavigate();
  const [focus, setFocus] = useState({
      username: false,
      password: false,
      confirmPassword: false
  });

  const usernameref:any = useRef(null)
  const passwordref:any = useRef(null)
  const confirmPasswordref:any = useRef(null)

  function Valid(e: any) {
      e.preventDefault();  

      let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/i;
      if (emailRegex.test(email) && passwordRegex.test(password)) {
          setError(false);

          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
              if (user) {
                navigate('/home')
              } else {
                setError(true);
              }
            })
          .catch((error) => {
            console.log("oii")
            setError(true);
          });
      } else {
        setError(true)
      }
  }

  function GoRegister(e: any) {
    e.preventDefault();
    navigate('/register')
  }

  return (
    <><InputF onSubmit={Valid}>
      <InputDiv>
        <Input onChange={event => setEmail(event.target.value)} ref={usernameref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Email" />
        <Icone move={email} src={iconEmail} alt="Logo Compass.Oul" />
      </InputDiv>
      <InputDiv>
        <Input onChange={event => setPassword(event.target.value)} ref={passwordref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type={passwordView ? 'password' : 'text' }
          placeholder="Senha" />
        <Icone onClick={() => {
          setPasswordView(!passwordView);
          }}
          move={password} src={iconPassword} alt="Logo Compass.Oul" />
      </InputDiv>
      {error ? <InvalidText><InvalidP>Ops, usuário ou senha inválidos. Tente novamente!</InvalidP></InvalidText> : ""}
      <ButtonContinue>Continuar</ButtonContinue>¨
    </InputF>
    <TextGoRegister>Caso você não possua um cadastro, clique <WordGoRegister onClick={GoRegister}>aqui</WordGoRegister></TextGoRegister></>
  )                 
 }

export default FormLogin;