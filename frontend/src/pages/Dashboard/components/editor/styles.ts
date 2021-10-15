import styled from 'styled-components'

interface SelectorOptionProps {
    selected: boolean
}

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
    box-shadow: 0 1px 3px #cdc6c6;
`

export const EditorSelector = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
`

export const EditorSelectorOption = styled.button<SelectorOptionProps>`
    border-style: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color:  ${props => props.selected ? '#fff' : '#fafafa'};
`

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    justify-content: flex-start;
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
