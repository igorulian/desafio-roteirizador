import api from './api'

interface IRegisterRequest {
    username: string,
    email: string,
    password: string,
    password2: string
}
interface IRegisterResponseData{
    username: string,
    email: string,
    token: string,
}
export interface IRegisterResponse {
    data?: IRegisterResponseData
    error?: string
}

export async function requestRegister (data:IRegisterRequest) {
  try {
    const { username, email, password, password2 } = data

    if (!username || !email || !password || !password2)
      return { error: 'Preencha todos os campos' }

    if (password !== password2)
      return { error: 'Senhas não correspondem' }

    const response:IRegisterResponse = await api.post('/register', data)

    if (!response.data)
      return { error: 'Ocorreu um erro ao efeutar o cadastro' }

    if (response.error)
      return { error: response.error }

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('username', response.data.username)

    return { token: response.data.token, username: response.data.username }
  } catch (error:any) {
    return { error: error.response ? error.response.data.error : 'Ocorreu um erro com os nossos servidores' }
  }
}
