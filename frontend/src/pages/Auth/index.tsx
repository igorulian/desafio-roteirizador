import React, { useState } from 'react'
import Login from './login'
import Register from './register'
import { Page } from './styles'

const Auth:React.FC = () => {
  const [page, setPage] = useState('login')

  function changePage () {
    setPage(page === 'login' ? 'register' : 'login')
  }

  return (
    <Page>
      {page === 'login'
        ? <Login onChangePage={() => changePage()}/>
        : <Register onChangePage={() => changePage()}/>
      }
    </Page>
  )
}

export default Auth
