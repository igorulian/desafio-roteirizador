import React from 'react'
import { MapContainer } from './styles'
import GoogleMapReact from 'google-map-react'
import { GoogleApiKey, ICoords, IMapInfo } from '../Editor/newRoute'
import { IoLocationSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'
import { colors } from '../../../../components/colors'

interface IMapProps {
  data: IMapInfo
}

interface ILocationPinProps {
  lat: number,
  lng: number,
  color: string,
  text?: string
}

const LocationPin:React.FC<ILocationPinProps> = (props:ILocationPinProps) => (
  <IconContext.Provider value={{ color: props.color, size: '30px' }}>
    <IoLocationSharp/>
  </IconContext.Provider>
)

const Map:React.FC<IMapProps> = (props:IMapProps) => {
  const origin:ICoords = props.data.origin
  const stops:ICoords[] = props.data.stops

  return (
        <MapContainer>
         <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleApiKey }}
          defaultCenter={{ lat: -21.6219061, lng: -49.0729871 }}
          defaultZoom={11}
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
