import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { IRouteResponse, listRoutes } from '../../../../Api/requests'
import { ICoords, INewRouteProps } from './newRoute'
import { HistoryContainer, RouteContainer, RouteContent } from './styles'

interface IRouteProps extends INewRouteProps {
  route: IRouteResponse,
  index: number
}

const Route:React.FC<IRouteProps> = (props:IRouteProps) => {
  function updateMap () {
    props.updateOrigin(props.route.origin)
    props.updateStops(props.route.stops)
  }

  const stops = props.route.stops.length

  return (
    <RouteContainer onClick={() => updateMap()}>
      <RouteContent>
        <p> Rota #{props.index}</p>
        <p> {stops} parada{stops > 1 && 's'}</p>
      </RouteContent>

      <MdArrowForwardIos style={{ marginRight: '15px' }}/>
    </RouteContainer>
  )
}

const History:React.FC<INewRouteProps> = (props:INewRouteProps) => {
  const [routes, setRoutes] = useState<IRouteResponse[]>([])

  useEffect(() => {
    async function getData () {
      const response = await listRoutes()

      if (response.error)
        return alert(response.error)

      if (response.data)
        setRoutes(response.data)
    }

    getData()
  }, [])

  return (
        <HistoryContainer>
          {routes.map(route =>
            <Route
              index={routes.indexOf(route)}
              key={route.origin._id}
              route={route}
              updateOrigin={(data:ICoords) => props.updateOrigin(data)}
              updateStops={(data:ICoords[]) => props.updateStops(data)}
              />
          )}
        </HistoryContainer>
  )
}

export default History
