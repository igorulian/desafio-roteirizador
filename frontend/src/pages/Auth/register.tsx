import React, { useState } from 'react'
import { Input, LoginButton, LoginContainer, LoginTitle, GoToLogin, GoToLoginButton, InputContainer, InputTitle } from './styles'

interface RegisterProps {
  onChangePage: Function,
  handleRegister: Function,
  loading: boolean
}

const Register:React.FC<RegisterProps> = (props:RegisterProps) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
        <LoginContainer>
        <LoginTitle> Faça seu cadastro </LoginTitle>

        <InputContainer>
          <InputTitle> Nome completo </InputTitle>
          <Input placeholder='Digite seu nome' onChange={(data) => setUsername(data.target.value)}/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Email </InputTitle>
          <Input placeholder='Digite seu email' onChange={(data) => setEmail(data.target.value)}/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Senha </InputTitle>
          <Input placeholder='Digite sua senha' onChange={(data) => setPassword(data.target.value)}/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Repita sua senha </InputTitle>
          <Input placeholder='Digite sua senha novamente' onChange={(data) => setPassword2(data.target.value)}/>
        </InputContainer>

        <LoginButton onClick={() => props.handleRegister({ username, email, password, password2 })}> {props.loading ? 'CARREGANDO...' : 'ENTRAR'} </LoginButton>

        <GoToLogin> Já possui uma conta? </GoToLogin>
        <GoToLoginButton onClick={() => props.onChangePage()}> Clique aqui </GoToLoginButton>
      </LoginContainer>
  )
}

export default Register
