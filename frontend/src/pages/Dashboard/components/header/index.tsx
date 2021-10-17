import React from 'react'
import { HeaderContainer, HeaderLogo, HeaderUserImage, HeaderUserInfo, HeaderUserName } from './styles'
import logo from '../../../../Assets/Logo.png'

const Header:React.FC = () => {
  const profilePictureUrl = 'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'
  const username = localStorage.getItem('username')

  function logout () {
    localStorage.setItem('username', '')
    localStorage.setItem('token', '')
    window.location.href = '/'
  }

  return (
    <HeaderContainer>
      <HeaderLogo src={logo}/>

      <HeaderUserInfo>
        <HeaderUserName> {username} </HeaderUserName>
        <HeaderUserImage src={profilePictureUrl} onClick={() => logout()}/>
      </HeaderUserInfo>

    </HeaderContainer>
  )
}

export default Header
