import styled from 'styled-components'
import { colors } from '../../../../components/colors'

interface SelectorOptionProps {
    selected: boolean
}

interface StopsInputContainerProps {
    ammount: number
}

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    min-width: 320px;
    height: 100%;
    box-shadow: 0 1px 3px #cdc6c6;
`

export const EditorSelector = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    min-height: 50px;
`

export const EditorSelectorOption = styled.button<SelectorOptionProps>`    
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    display: flex;
    font-family: 'Public Sans', sans-serif;
    font-size: 17px;
    color: #6c6c6c;
    border-style: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color:  ${props => props.selected ? '#fff' : '#ccc'};
    opacity: ${props => props.selected ? '1' : '.4'};
    align-items: center;
    justify-content: center;
`

export const StopsInputContainer = styled.div<StopsInputContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    ${props => props.ammount >= 4 &&
    'overflow-y: scroll;'
    }
    max-height: 250px;
`

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
`

export const StopInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const OriginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 50px;
`

export const EditorInputTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    font-size: 12px;
    color: #262930;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: bold;
`

export const EditorInput = styled.input`
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

export const inputStyle = {
  height: '30px',
  width: '92%',
  color: '#262930',
  borderRadius: '8px',
  boxShadow: '#e5e7eb 0px 0px 0px 1px inset',
  background: '#fafafb none repeat scroll 0% 0%',
  padding: '8px 16px',
  fontSize: '16px',
  lineHeight: '24px',
  outline: 'currentcolor none medium',
  border: 'medium none',
  textOverflow: 'ellipsis',
  transition: 'box-shadow 0.5s ease 0s',
  alignSelf: 'center'
}

export const AddStopButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    cursor: pointer;
    background-color: #fff;
    margin-top: 20px;
`

export const RouteInfoContainer = styled.div`
    height: 100px;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #ccc;
    padding-left: 20px;
    padding-top: 20px;
`

export const RouteInfoText = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    font-size: 17px;
    color: #6c6c6c
`

export const SaveRouteButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap');
    font-family: 'Public Sans', sans-serif;
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    border-style: none;
    cursor: pointer;
    background-color: ${colors.secundary};
    width: 60%;
    height: 50px;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    &:hover{
        opacity: 0.9;
    }
`
export const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center 
`

export const HorizontalDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
