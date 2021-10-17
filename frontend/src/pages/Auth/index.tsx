import React, { useState } from 'react'
import { requestRegister } from '../../Api/requests'
import Login from './login'
import Register from './register'
import { Page } from './styles'

export interface IRegisterData {
  username: string,
  email: string,
  password: string,
  password2: string
}

const Auth:React.FC = () => {
  const [page, setPage] = useState('register')
  const [loading, setLoading] = useState(false)

  function changePage () {
    setPage(page === 'login' ? 'register' : 'login')
  }

  async function handleRegister (data:IRegisterData) {
    setLoading(true)
    const response = await requestRegister(data)

    setLoading(false)
    if (!response)
      return alert('Ocorreu um erro ao efetuar o cadastro')

    if (response.error)
      return alert(response.error)

    setLoading(false)
    window.location.href = '/dashboard'
  }

  return (
    <Page>
      {page === 'login'
        ? <Login onChangePage={() => changePage()}/>
        : <Register
            onChangePage={() => changePage()}
            handleRegister={handleRegister}
            loading={loading}
          />
      }
    </Page>
  )
}

export default Auth
