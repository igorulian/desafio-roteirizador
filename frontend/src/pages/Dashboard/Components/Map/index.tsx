import React from 'react'
import { MapContainer } from './styles'
import GoogleMapReact from 'google-map-react'
import { GoogleApiKey } from '../Editor/newRoute'

const Map:React.FC = () => {
  return (
        <MapContainer>
         <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleApiKey }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={11}
        ></GoogleMapReact>
        </MapContainer>
  )
}

export default Map
