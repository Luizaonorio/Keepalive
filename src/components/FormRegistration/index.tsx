import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorColor } from "../../UI/variaveis";
import { BsCheck2 } from "react-icons/bs";
import { ButtonCreate, IconCheck, Input, InputsFormRegister, InputWrapped, InvalidP, InvalidText, TextGoLogin, WordGoLogin } from "./styled";

const FormRegister = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      let nameRegex = /(?=^.{2,60}$)^[A-ZÀÁÂĖÈÉÊÌÍÒÓÔÕÙÚÛÇ][a-zàáâãèéêìíóôõùúç]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;
      let lastNameRegex = /(?=^.{2,60}$)^[A-ZÀÁÂĖÈÉÊÌÍÒÓÔÕÙÚÛÇ][a-zàáâãèéêìíóôõùúç]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;

      if (emailRegex.test(email) && passwordRegex.test(password) && password == confirmPassword) {
          setError(false);
          navigate('/home')
      } else { setError(true);
      }
  }

  function GoLogin(e: any) {
    e.preventDefault();
    navigate('/')
  }

  return (
    <><InputsFormRegister onSubmit={ValidInputs}>
        <InputWrapped>
        <Input onChange={event => setEmail(event.target.value)} ref={userLastNameref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Usúarios" />
        <IconCheck move={email} src={BsCheck2} alt="Logo Compass.Oul" />
      </InputWrapped>
       <InputWrapped>
        <Input onChange={event => setEmail(event.target.value)} ref={userNameref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Usúarios" />
        <IconCheck moveIcon={email} src={BsCheck2} alt="Logo Compass.Oul" />
      </InputWrapped>
      <InputWrapped>
        <Input onChange={event => setEmail(event.target.value)} ref={userEmailref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="text"
          placeholder="Usúarios" />
        <IconCheck moveIcon={email} src={BsCheck2} alt="Logo Compass.Oul" />
      </InputWrapped>
      <InputWrapped>
        <Input onChange={event => setPassword(event.target.value)} ref={passwordref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="password"
          placeholder="Senha" />
        <IconCheck moveIcon={password} src={BsCheck2} alt="Logo Compass.Oul" />
      </InputWrapped>
      <InputWrapped>
        <Input onChange={event => setConfirmPassword(event.target.value)} ref={confirmPasswordref} style={{ borderColor: `${error ? "#E9B425" : "white"}` }}
          type="password"
          placeholder="Senha" />
        <IconCheck moveIcon={confirmPassword} src={BsCheck2} alt="Logo Compass.Oul" />
      </InputWrapped>
      {error ? <InvalidText><InvalidP>Ops, usuário ou senha inválidos. Tente novamente!</InvalidP></InvalidText> : ""}
      <ButtonCreate>Criar conta</ButtonCreate>¨
    </InputsFormRegister>

    <TextGoLogin>Já possui um cadastro? Clique <WordGoLogin onClick={GoLogin}>aqui</WordGoLogin></TextGoLogin></>
  )                 
}