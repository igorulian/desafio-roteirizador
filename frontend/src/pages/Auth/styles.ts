import styled from 'styled-components'
import { colors } from '../../components/colors'

export const Page = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: fit-content;
    background-color: #fff;
    box-shadow: 0 1px 3px #cdc6c6;
    border-radius: 15px;
    padding: 10px;
`

export const LoginTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const InputTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    font-size: 12px;
    color: #262930;
    margin-top: 15px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    height: 30px;
    width: 92%;
    color: #262930;
    border-radius: 8px;
    box-shadow: #e5e7eb 0px 0px 0px 1px inset;
    background: #fafafb none repeat scroll 0% 0%;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    outline: currentcolor none medium;
    border: medium none;
    font-family: inherit;
    text-overflow: ellipsis;
    z-index: 1;
    transition: box-shadow 0.5s ease 0s;
    appearance: none;
    align-self: center;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
`
export const LoginButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-size: 18px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Public Sans', sans-serif;
    display: flex;
    height: 45px;
    width: 75%;
    background-color: ${colors.primary};
    border: none;
    border-radius: 20px;
    align-self: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 10px;
    margin-top: 40px;
    margin-bottom: 5px;
`

export const GoToLogin = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    font-size: 13px;
    margin-top: 10px;
    color: #ccc;
`

export const GoToLoginButton = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif; 
    font-size: 13px;
    color: #6b6b6b;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: flex-start;
`
