import React, { useState } from 'react'
import { ILoginRequest, IRegisterRequest, requestLogin, requestRegister } from '../../Api/requests'
import Login from './login'
import Register from './register'
import { Page } from './styles'

const Auth:React.FC = () => {
  const [page, setPage] = useState('register')
  const [loading, setLoading] = useState(false)

  function changePage () {
    setPage(page === 'login' ? 'register' : 'login')
  }

  async function handleRegister (data:IRegisterRequest) {
    setLoading(true)
    const response = await requestRegister(data)
    setLoading(false)

    if (response.error)
      return alert(response.error)

    setLoading(false)
    window.location.href = '/dashboard'
  }

  async function handleLogin (data:ILoginRequest) {
    setLoading(true)
    const response = await requestLogin(data)
    setLoading(false)

    if (response.error)
      return alert(response.error)

    setLoading(false)
    window.location.href = '/dashboard'
  }

  return (
    <Page>
      {page === 'login'
        ? <Login
          onChangePage={() => changePage()}
          loading={loading}
          handleLogin={handleLogin}
          />
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
