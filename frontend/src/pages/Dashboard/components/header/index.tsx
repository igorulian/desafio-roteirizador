import React from 'react'
import { HeaderContainer, HeaderLogo, HeaderUserImage, HeaderUserInfo, HeaderUserName } from './styles'
import logo from '../../../../Assets/Logo.png'

const Header:React.FC = () => {
  const profilePictureUrl = 'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'

  return (
    <HeaderContainer>
      <HeaderLogo src={logo}/>

      <HeaderUserInfo>
        <HeaderUserName> Nome do cara </HeaderUserName>
        <HeaderUserImage src={profilePictureUrl}/>
      </HeaderUserInfo>

    </HeaderContainer>
  )
}

export default Header
