import React from 'react'
import { Input, LoginButton, LoginContainer, LoginTitle, InputContainer, InputTitle, TitleContainer } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { colors } from '../../components/colors'

interface LoginProps {
  onChangePage: Function
}

const Login:React.FC<LoginProps> = (props:LoginProps) => {
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
          <Input placeholder='Digite seu email'/>
        </InputContainer>

        <InputContainer>
          <InputTitle> Senha </InputTitle>
          <Input placeholder='Digite sua senha'/>
        </InputContainer>

        <LoginButton> ENTRAR </LoginButton>
      </LoginContainer>
  )
}

export default Login
