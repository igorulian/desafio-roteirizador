import React, { useState } from 'react'
import { StopInputContainer, EditorInputTitle, OptionContainer, OriginInputContainer, inputStyle, AddStopButton, RouteInfoContainer, StopsInputContainer, SaveRouteButton, InputsContainer, RouteInfoText, HorizontalDiv } from './styles'
import { BiCurrentLocation } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { colors } from '../../../../components/colors'
import Autocomplete from 'react-google-autocomplete'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiRulerLine, RiSave3Fill } from 'react-icons/ri'
import { ImClock } from 'react-icons/im'
import { addRoute } from '../../../../Api/requests'
import { calculateRouteDistance } from './distance'
import env from '../../../../env.json'

export interface INewRouteProps {
  updateOrigin: Function,
  updateStops: Function
}

export interface ICoords {
  name: string,
  lat: number,
  lng: number
}

interface InputOptionProps {
  onSelect: Function,
  style?: any
}

const key = env.GoogleApiKey

const OriginInput:React.FC<InputOptionProps> = (props:InputOptionProps) => {
  function setToCurrentLocation () {
    if (!navigator || !navigator.geolocation)
      return alert('O seu navegador não possui Geolocalização :|')

    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude, name: 'Posição atual' }
      props.onSelect(currentPosition)
    }, () => {
      return alert('Não foi possivel pegar sua localização atual :|')
    })
  }

  return (
  <OriginInputContainer>
      <EditorInputTitle> Origem: </EditorInputTitle>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
          placeholder='Digite o seu local de origem'
          apiKey={env.GoogleApiKey}
          options={{
            types: ['geocode', 'establishment']
          }}
          onPlaceSelected={(place) => {
            const lat = place.geometry?.location?.lat()
            const lng = place.geometry?.location?.lng()
            const name = place.address_components[0]?.long_name
            props.onSelect({ lat, lng, name })
          }}
          style={inputStyle}
        />

        <IconContext.Provider value={{ color: colors.primary, size: '30px', style: { cursor: 'pointer', marginLeft: '10px' } }}>
          <BiCurrentLocation onClick={() => setToCurrentLocation()}/>
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
          apiKey={key}
          options={{ types: ['geocode', 'establishment'] }}
          onPlaceSelected={(place) => {
            const lat = place.geometry?.location?.lat()
            const lng = place.geometry?.location?.lng()
            const name = place.address_components[0]?.long_name
            props.onSelect({ lat, lng, name })
          }}
          style={inputStyle}
        />
    </StopInputContainer>
)

const NewRoute:React.FC<INewRouteProps> = (props:INewRouteProps) => {
  const [stopsInput, setStopsInput] = useState<number[]>([0])
  const [start, setStart] = useState<ICoords>({ lat: 0, lng: 0, name: '' })
  const [stops] = useState<ICoords[]>([{ lat: 0, lng: 0, name: '' }])
  const [loading, setLoading] = useState(false)

  const { distance, travelTime } = calculateRouteDistance(start, stops)

  function addStop () {
    setStopsInput(sinpt => [...sinpt, (sinpt.length)])
    props.updateStops(stops)
  }

  function changeStop (inx:number, coords:ICoords) {
    stops[inx] = coords
    console.log(stops)
    props.updateStops(stops)
  }

  function changeOrigin (coords: ICoords) {
    setStart(coords)
    props.updateOrigin(coords)
  }

  async function saveRoute () {
    setLoading(true)
    const response = await addRoute({ origin: start, stops })
    setLoading(false)

    if (response.error)
      return alert(response.error)

    alert('Rota salva com sucesso!')
  }

  return (
    <OptionContainer>
      <InputsContainer>

        <OriginInput onSelect={(coords:ICoords) => changeOrigin(coords)}/>

        <StopsInputContainer ammount={stopsInput.length}>
          {stopsInput.map(stop =>
            <StopInput key={stop} onSelect={(a:ICoords) => changeStop(stop, a)}/>
          )}
        </StopsInputContainer>

        <AddStopButton onClick={() => { addStop() }}>
          <IconContext.Provider value={{ color: colors.primary, size: '30px' }}>
            <AiFillPlusCircle/>
          </IconContext.Provider>
        </AddStopButton>

      </InputsContainer>

        <SaveRouteButton onClick={() => saveRoute()}>
          <RiSave3Fill style={{ marginRight: '10px' }}/>
           {loading ? 'Carregando...' : 'Salvar Rota'}
        </SaveRouteButton>

      <RouteInfoContainer>
        <HorizontalDiv>
          <RiRulerLine style={{ marginRight: '10px' }}/>
          <RouteInfoText> Distância: {distance}km</RouteInfoText>
        </HorizontalDiv>

        <HorizontalDiv style={{ marginTop: '10px' }}>
          <ImClock style={{ marginRight: '10px' }}/>
          <RouteInfoText> Tempo estimado: {travelTime}min</RouteInfoText>
        </HorizontalDiv>
      </RouteInfoContainer>
    </OptionContainer>
  )
}

export default NewRoute
