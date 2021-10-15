import React from 'react'
import { HeaderContainer, HeaderLogo, HeaderUserImage, HeaderUserInfo, HeaderUserName } from './styles'

const Header:React.FC = () => {
  const profilePictureUrl = 'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'

  return (
    <HeaderContainer>
      <HeaderLogo> Teste Logo </HeaderLogo>

      <HeaderUserInfo>
        <HeaderUserName> Nome do cara </HeaderUserName>
        <HeaderUserImage src={profilePictureUrl}/>
      </HeaderUserInfo>

    </HeaderContainer>
  )
}

export default Header
