import React, { useState } from 'react'
import { Input, LoginButton, LoginContainer, LoginTitle, InputContainer, InputTitle, TitleContainer } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { colors } from '../../components/colors'

interface LoginProps {
  onChangePage: Function,
  loading: boolean,
  handleLogin: Function
}

const Login:React.FC<LoginProps> = (props:LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
      <LoginContainer>
        <TitleContainer>
          <IconContext.Provider value={{ color: `${colors.primary}`, size: '20px', style: { cursor: 'pointer', marginRight: '100px' } }}>
            <FiArrowLeft onClick={() => props.onChangePage()}/>
          </IconContext.Provider>

          <LoginTitle> Faça seu login </LoginTitle>
        </TitleContainer>

        <InputContainer>
          <InputTitle> Email </InputTitle>
          <Input placeholder='Digite seu email' onChange={(data) => setEmail(data.target.value)}/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Senha </InputTitle>
          <Input placeholder='Digite sua senha' onChange={(data) => setPassword(data.target.value)}/>
        </InputContainer>

        <LoginButton onClick={() => props.handleLogin({ email, password })}> {props.loading ? 'Carregando...' : 'ENTRAR' }</LoginButton>
      </LoginContainer>
  )
}

export default Login
