import React, { useState } from 'react'
import NewRoute, { IMapInfo } from './newRoute'
import History from './history'
import { EditorContainer, EditorSelector, EditorSelectorOption } from './styles'

interface IEditorProps {
  updateMap: Function
}

const Editor:React.FC<IEditorProps> = (props:IEditorProps) => {
  const [selector, setSelector] = useState(true)

  return (
    <EditorContainer>

      <EditorSelector>
        <EditorSelectorOption selected={selector} onClick={() => setSelector(true)}> Nova rota </EditorSelectorOption>
        <EditorSelectorOption selected={!selector} onClick={() => setSelector(false)}> Histórico </EditorSelectorOption>
      </EditorSelector>

      {selector
        ? <NewRoute updateMap={(data:IMapInfo) => props.updateMap(data) }/>
        : <History/>
      }

    </EditorContainer>
  )
}

export default Editor
