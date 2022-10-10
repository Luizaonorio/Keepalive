import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorColor } from "../../UI/variaveis";
import { BsCheck2 } from "react-icons/bs";
import { ButtonCreate, IconCheck, Input, InputsFormRegister, InputWrapped, InvalidP, InvalidText, TextGoLogin, WordGoLogin } from "./styled";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import TooltipValidPassword from "./Tooltip";
import { Arrow } from "./Tooltip/styled";

const FormRegister = () => {

  const [email, setEmail] = useState("");
  const [emaile, setEmaile] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [appear, setAppear] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [focus, setFocus] = useState({
      username: false,
      password: false,
      confirmPassword: false,
      name: false,
      lastName: false,
  });

  const userEmailref:any = useRef(null)
  const userNameref:any = useRef(null)
  const userLastNameref:any = useRef(null)
  const passwordref:any = useRef(null)
  const confirmPasswordref:any = useRef(null)

  function ValidInputs(e: any) {
      e.preventDefault();  

      let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/i;

      if (emailRegex.test(email) && passwordRegex.test(password) && password == confirmPassword) {
          setError(false);

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              updateProfile(userCredential.user, {
                displayName: name
              })
              navigate('/')
            })
            .catch((error) => {
              setError(true)
            });
          } else {
            setError(true)
          }
  }

  function GoLogin(e: any) {
    e.preventDefault();
    navigate('/');
  }

  return (
    <><InputsFormRegister onSubmit={ValidInputs}>
      <InputWrapped >
        <Input onChange={event => setEmail(event.target.value)} ref={userEmailref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Email" />
          <IconCheck moveIcon={email} alt="Icone de check desabilitado"><BsCheck2 /></IconCheck>
      </InputWrapped>
      <InputWrapped>
        <Input onChange={event => setName(event.target.value)} ref={userNameref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Nome" />
        <IconCheck moveIcon={name} alt="Icone de check desabilitado"><BsCheck2 /></IconCheck>
      </InputWrapped>
        <InputWrapped>
        <Input onChange={event => setLastName(event.target.value)} ref={userLastNameref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Sobrenome" />
        <IconCheck moveIcon={lastName} alt="Icone de check desabilitado"><BsCheck2 /></IconCheck>
      </InputWrapped>
      <InputWrapped>
        <Input onChange= {event => {setPassword(event.target.value)}} 
          onBlur={() => setAppear(false)}
          onFocus={() => setAppear(true)}
          ref={passwordref}
          style={{ borderColor: `${error ? "#E9B425" : "white"}`}}
          type="password"
          placeholder="Senha" />
        <IconCheck moveIcon={password} alt="Icone de check desabilitado"><BsCheck2 /></IconCheck>
      </InputWrapped>
      <TooltipValidPassword password={password} appear={appear}/>
      <InputWrapped>
        <Input onChange={event => setConfirmPassword(event.target.value)} ref={confirmPasswordref} style={{ borderColor: `${error ? "#E9B425" : "white"}`}}
          type="password"
          placeholder="Confirmar senha" />
        <IconCheck moveIcon={confirmPassword} alt="Icone de check desabilitado"><BsCheck2 /></IconCheck>
      </InputWrapped>
      {error ? <InvalidText><InvalidP>Ops, usuário ou senha inválidos. Tente novamente!</InvalidP></InvalidText> : ""}
      <ButtonCreate>Criar conta</ButtonCreate>¨
    </InputsFormRegister>

    <TextGoLogin>Já possui um cadastro? Clique <WordGoLogin onClick={GoLogin}>aqui</WordGoLogin></TextGoLogin></>
  )                 
}

export default FormRegister;