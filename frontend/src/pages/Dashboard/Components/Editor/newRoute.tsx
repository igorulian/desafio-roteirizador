import React, { useEffect, useState } from 'react'
import { StopInputContainer, EditorInputTitle, OptionContainer, OriginInputContainer, inputStyle, AddStopButton } from './styles'
import { BiCurrentLocation } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { colors } from '../../../../components/colors'
import Autocomplete from 'react-google-autocomplete'
import { AiFillPlusCircle } from 'react-icons/ai'

interface INewRouteProps {
  updateMap?: Function
}

interface ICoords {
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
    </StopInputContainer>
)

const NewRoute:React.FC<INewRouteProps> = (props:INewRouteProps) => {
  const [origin, setOrigin] = useState<ICoords>()
  const [stops, setStops] = useState<ICoords[]>([{ lat: 0, lng: 0 }])

  useEffect(() => {
    console.log(origin, stops)

    if (props.updateMap)
      props.updateMap({ origin, stops })
  }, [origin, stops])

  function updateOrigin (coords:ICoords) {
    if (origin || !origin)
      setOrigin(coords)
  }

  function addStop () {
    setStops(stops => [...stops, { lat: 0, lng: 0 }])
  }

  function setStop (inx:number, coords:ICoords) {
    const newStops:ICoords[] = stops

    if (newStops !== undefined)
      newStops[inx] = coords

    setStops(newStops)
  }

  return (
    <OptionContainer>

      <OriginInput onSelect={(a:ICoords) => updateOrigin(a)}/>

      {stops.map(stop =>
        <StopInput key={stops.indexOf(stop)} onSelect={(a:ICoords) => setStop(stops.indexOf(stop), a)}/>
      )}

      <AddStopButton onClick={() => { addStop() }}>
        <IconContext.Provider value={{ color: colors.primary, size: '30px' }}>
          <AiFillPlusCircle/>
        </IconContext.Provider>

      </AddStopButton>
    </OptionContainer>
  )
}

export default NewRoute
