import React from 'react'
import { EditorInput, StopInputContainer, EditorInputTitle, OptionContainer, OriginInputContainer, inputStyle } from './styles'
import { BiCurrentLocation } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { colors } from '../../../../components/colors'
import Autocomplete from 'react-google-autocomplete'

interface InputOptionProps {
  title: string,
  placeholder: string,
  onChange: Function,
  style?: any
}

const GoogleApiKey = ''

const OriginInput:React.FC = () => {
  return (
  <OriginInputContainer>
      <EditorInputTitle> Origem: </EditorInputTitle>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
          apiKey={GoogleApiKey}
          options={{
            types: ['geocode', 'establishment']
          }}
          onPlaceSelected={(place) => {
            console.log(place)
          }}
          style={inputStyle}
        />

        <IconContext.Provider value={{ color: colors.primary, size: '30px', style: { cursor: 'pointer', marginLeft: '10px' } }}>
          <BiCurrentLocation/>
        </IconContext.Provider>

      </div>

    </OriginInputContainer>
  )
}

const StopInput:React.FC<InputOptionProps> = (props:InputOptionProps) => (
    <StopInputContainer style={props.style}>
      <EditorInputTitle> {props.title} </EditorInputTitle>
      <EditorInput placeholder={props.placeholder} onChange={(a) => props.onChange(a)}/>
    </StopInputContainer>
)

const NewRoute:React.FC = () => {
  return (
    <OptionContainer>

      <OriginInput/>

      <StopInput title='Parada:' placeholder='Digite uma parada' onChange={(a:string) => console.log(a)}/>
      <StopInput title='Parada:' placeholder='Digite uma parada' onChange={(a:string) => console.log(a)}/>
      <StopInput title='Parada:' placeholder='Digite uma parada' onChange={(a:string) => console.log(a)}/>
      <StopInput title='Parada:' placeholder='Digite uma parada' onChange={(a:string) => console.log(a)}/>
    </OptionContainer>
  )
}

export default NewRoute
