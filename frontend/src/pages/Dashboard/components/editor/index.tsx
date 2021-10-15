import React, { useState } from 'react'
import { EditorContainer, EditorSelector, EditorSelectorOption, OptionContainer } from './styles'

const Editor:React.FC = () => {
  const [selector, setSelector] = useState(true)

  return (
    <EditorContainer>

      <EditorSelector>
        <EditorSelectorOption onClick={() => setSelector(true)}> Nova rota </EditorSelectorOption>
        <EditorSelectorOption onClick={() => setSelector(false)}> Histórico </EditorSelectorOption>
      </EditorSelector>

      {selector
        ? <OptionContainer>
            <p> NOVA ROTA</p>
          </OptionContainer>

        : <OptionContainer>
            <p> GISTOIO</p>
          </OptionContainer>}

    </EditorContainer>
  )
}

export default Editor
