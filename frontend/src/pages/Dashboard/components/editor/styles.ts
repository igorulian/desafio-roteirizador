import styled from 'styled-components'

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100%;
    background-color: #f1f;
`

export const EditorSelector = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: #f11;
`

export const EditorSelectorOption = styled.button`
    border-style: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #ffa;
    &:hover {
        opacity: 0.8;
    }
`

export const OptionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #11f;
`
