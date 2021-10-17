import React from 'react'
import { MapContainer } from './styles'
import GoogleMapReact from 'google-map-react'
import { GoogleApiKey, ICoords } from '../Editor/newRoute'
import { IoLocationSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'
import { colors } from '../../../../components/colors'

interface IMapProps {
  origin: ICoords,
  stops: ICoords[]
}

interface ILocationPinProps {
  lat: number,
  lng: number,
  color: string,
  text?: string
}

const LocationPin:React.FC<ILocationPinProps> = (props:ILocationPinProps) => {
  if ((props.lat + props.lng) === 0) return null
  return (
    <IconContext.Provider value={{ color: props.color, size: '30px' }}>
    <IoLocationSharp/>
   </IconContext.Provider>
  )
}

function isValidCoord (coord:ICoords) {
  return !(coord.lng + coord.lat === 0)
}

const Map:React.FC<IMapProps> = (props:IMapProps) => {
  const origin:ICoords = props.origin
  const stops:ICoords[] = props.stops

  return (
        <MapContainer>
         <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleApiKey }}
          zoom={isValidCoord(origin) ? 9 : 3}
          center={origin}
        >

          <LocationPin
            color={colors.primary}
            lat={origin.lat}
            lng={origin.lng}
          />

          {stops.map(stop =>
            <LocationPin
              color={colors.secundary}
              key={stop.lat * stop.lng}
              lat={stop.lat}
              lng={stop.lng}
            />
          )}

        </GoogleMapReact>
        </MapContainer>
  )
}

export default Map
