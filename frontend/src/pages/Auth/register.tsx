import React from 'react'
import { Input, LoginButton, LoginContainer, LoginTitle, GoToLogin, GoToLoginButton, InputContainer, InputTitle } from './styles'

interface RegisterProps {
  onChangePage: Function
}

const Register:React.FC<RegisterProps> = (props:RegisterProps) => {
  return (
        <LoginContainer>
        <LoginTitle> Faça seu cadastro </LoginTitle>

        <InputContainer>
          <InputTitle> Nome completo </InputTitle>
          <Input placeholder='Digite seu nome'/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Email </InputTitle>
          <Input placeholder='Digite seu email'/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Senha </InputTitle>
          <Input placeholder='Digite sua senha'/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Repita sua senha </InputTitle>
          <Input placeholder='Digite sua senha novamente'/>
        </InputContainer>

        <LoginButton> ENTRAR </LoginButton>

        <GoToLogin> Já possui uma conta? </GoToLogin>
        <GoToLoginButton onClick={() => props.onChangePage()}> Clique aqui </GoToLoginButton>
      </LoginContainer>
  )
}

export default Register
