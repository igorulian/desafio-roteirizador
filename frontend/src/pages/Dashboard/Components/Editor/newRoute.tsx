import React, { useState } from 'react'
import { StopInputContainer, EditorInputTitle, OptionContainer, OriginInputContainer, inputStyle, AddStopButton } from './styles'
import { BiCurrentLocation } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { colors } from '../../../../components/colors'
import Autocomplete from 'react-google-autocomplete'
import { AiFillPlusCircle } from 'react-icons/ai'

interface INewRouteProps {
  updateOrigin: Function,
  updateStops: Function
}

export interface ICoords {
  lat: number,
  lng: number
}

interface InputOptionProps {
  onSelect: Function,
  style?: any
}

export const GoogleApiKey = 'AIzaSyBRQRRY6z_IciTrG612AOj1iNWJQwt9eBw'

const OriginInput:React.FC<InputOptionProps> = (props:InputOptionProps) => {
  return (
  <OriginInputContainer>
      <EditorInputTitle> Origem: </EditorInputTitle>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
          placeholder='Digite o seu local de origem'
          apiKey={GoogleApiKey}
          options={{
            types: ['geocode', 'establishment']
          }}
          onPlaceSelected={(place) => {
            const lat = place.geometry?.location?.lat()
            const lng = place.geometry?.location?.lng()
            props.onSelect({ lat, lng })
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
      <EditorInputTitle> Parada: </EditorInputTitle>
      <Autocomplete
          placeholder='Digite um local de parada'
          apiKey={GoogleApiKey}
          options={{ types: ['geocode', 'establishment'] }}
          onPlaceSelected={(place) => {
            const lat = place.geometry?.location?.lat()
            const lng = place.geometry?.location?.lng()
            props.onSelect({ lat, lng })
          }}
          style={inputStyle}
        />
    </StopInputContainer>
)

const NewRoute:React.FC<INewRouteProps> = (props:INewRouteProps) => {
  const [stopsInput, setStopsInput] = useState<number[]>([0])
  const [stops] = useState<ICoords[]>([{ lat: 0, lng: 0 }])

  function addStop () {
    setStopsInput(sinpt => [...sinpt, (sinpt.length)])
    props.updateStops(stops)
  }

  function changeStop (inx:number, coords:ICoords) {
    console.log(`Alterando: inx: ${inx} | Para: ${coords.lat}, ${coords.lng}`)
    stops[inx] = coords
    console.log(stops)
    props.updateStops(stops)
  }

  function changeOrigin (coords: ICoords) {
    props.updateOrigin(coords)
  }

  function changeOriginToCurrentLocation () {
    if (!('geolocation' in navigator))
      alert('O seu navegador não possui Geolocalização :|')

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    })
  }

  return (
    <OptionContainer>

      <OriginInput onSelect={(coords:ICoords) => changeOrigin(coords)}/>

      {stopsInput.map(stop =>
        <StopInput key={stop} onSelect={(a:ICoords) => changeStop(stop, a)}/>
      )}

      <AddStopButton onClick={() => { addStop() }}>
        <IconContext.Provider value={{ color: colors.primary, size: '30px' }}>
          <AiFillPlusCircle onClick={() => changeOriginToCurrentLocation()}/>
        </IconContext.Provider>

      </AddStopButton>
    </OptionContainer>
  )
}

export default NewRoute
