import React, { useState } from 'react'
import NewRoute from './newRoute'
import History from './history'
import { EditorContainer, EditorSelector, EditorSelectorOption } from './styles'

const Editor:React.FC = () => {
  const [selector, setSelector] = useState(true)

  return (
    <EditorContainer>

      <EditorSelector>
        <EditorSelectorOption selected={selector} onClick={() => setSelector(true)}> Nova rota </EditorSelectorOption>
        <EditorSelectorOption selected={!selector} onClick={() => setSelector(false)}> Histórico </EditorSelectorOption>
      </EditorSelector>

      {selector
        ? <NewRoute/>
        : <History/>
      }

    </EditorContainer>
  )
}

export default Editor
