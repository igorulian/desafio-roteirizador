import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 3px #cdc6c6;
    z-index: 10;
`

export const HeaderUserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderUserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #ccc;
    margin-right: 50px;
    cursor: pointer;
`

export const HeaderUserName = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif; 
    font-size: 18px;
    margin-right: 30px;
    color: #333;
`

export const HeaderLogo = styled.img`
    margin-left: 50px;
    height: 60%;
`
