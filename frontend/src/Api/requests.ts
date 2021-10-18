import { ICoords } from '../pages/Dashboard/Components/Editor/newRoute'
import api, { authorizaton } from './api'

export interface IRegisterRequest {
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

export interface ILoginRequest {
    email: string,
    password: string
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

export async function requestLogin (data:ILoginRequest) {
  try {
    const { email, password } = data

    if (!email || !password)
      return { error: 'Preencha todos os campos' }

    const response:IRegisterResponse = await api.post('/login', data)

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
interface ICoordsResponse {
  _id: string,
  lat: number,
  lng: number
}

export interface IRoute {
  origin: ICoords,
  stops: ICoords[]
}

export interface IRouteResponse {
  origin: ICoordsResponse,
  stops: ICoordsResponse[]
}

interface IResponse {
  data?: IRouteResponse[],
  error?: any
}

export async function addRoute (data:IRoute) {
  try {
    const { stops, origin } = data

    if (!origin || !stops)
      return { error: 'Ocorreu um erro' }

    const response:IResponse = await api.post('/history/add', data, authorizaton)

    if (response.error)
      return { error: response.error }

    if (!response.data)
      return { error: 'Ocorreu um erro ao adicionar a rota' }

    return response
  } catch (error:any) {
    return { error: error.response ? error.response.data.error : 'Ocorreu um erro com os nossos servidores' }
  }
}

export async function listRoutes () {
  try {
    const response:IResponse = await api.get('/history/list', authorizaton)

    console.log(response)

    if (!response.data)
      return { error: 'Ocorreu um erro ao listar as rotas' }

    if (response.error)
      return { error: response.error }

    return response
  } catch (error:any) {
    return { error: error.response ? error.response.data.error : 'Ocorreu um erro com os nossos servidores' }
  }
}
