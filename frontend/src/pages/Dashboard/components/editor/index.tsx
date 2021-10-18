import React, { useState } from 'react'
import NewRoute, { ICoords } from './newRoute'
import History from './history'
import { EditorContainer, EditorSelector, EditorSelectorOption } from './styles'
import { FaRoute, FaHistory } from 'react-icons/fa'

interface IEditorProps {
  updateOrigin: Function,
  updateStops: Function
}

const Editor:React.FC<IEditorProps> = (props:IEditorProps) => {
  const [selector, setSelector] = useState(true)

  return (
    <EditorContainer>

      <EditorSelector>
        <EditorSelectorOption
          selected={selector}
          onClick={() => setSelector(true)}>

          <FaRoute style={{ marginRight: '10px' }}/>
           Nova rota
        </EditorSelectorOption>

        <EditorSelectorOption
          selected={!selector}
          onClick={() => setSelector(false)}>

          <FaHistory style={{ marginRight: '10px' }}/>
          Histórico
        </EditorSelectorOption>
      </EditorSelector>

      {selector
        ? <NewRoute
            updateOrigin={(data:ICoords) => props.updateOrigin(data)}
            updateStops={(data:ICoords[]) => props.updateStops(data)}
          />
        : <History
            updateOrigin={(data:ICoords) => props.updateOrigin(data)}
            updateStops={(data:ICoords[]) => props.updateStops(data)}
          />
      }

    </EditorContainer>
  )
}

export default Editor
