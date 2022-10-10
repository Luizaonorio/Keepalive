import { Tooltip, SpanPassword } from "./styled";

export default function TooltipValidPassword({password}: any) {
  
  const validation = {
    min: password.length >= 6 ? true : false,
    special: /(?=.*[$*&@#])/gm.test(password),
    num: /[0-9]/gm.test(password),
    upperCase: /[A-Z]/gm.test(password),
    lowerCase: /[a-z]/gm.test(password)
  }

  return (

    <Tooltip>
      <SpanPassword dye={validation.min}>6 caracteres</SpanPassword>
      <SpanPassword dye={validation.special}>1 caracter especial</SpanPassword>
      <SpanPassword dye={validation.num}>1 número</SpanPassword>
      <SpanPassword dye={validation.upperCase}>1 Letra maiúscula</SpanPassword>
      <SpanPassword dye={validation.lowerCase}>1 letra minúscula</SpanPassword>
    </Tooltip>
    
  )
}