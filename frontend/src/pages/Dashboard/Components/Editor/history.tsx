import React, { useEffect, useState } from 'react'
import { FaRoute } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { MdArrowForwardIos, MdTripOrigin } from 'react-icons/md'
import { IRouteResponse, listRoutes } from '../../../../Api/requests'
import { colors } from '../../../../components/colors'
import { ICoords, INewRouteProps } from './newRoute'
import { HistoryContainer, HorizontalDiv, RouteContainer, RouteContent, RouteDescription, RouteTitle } from './styles'

interface IRouteProps extends INewRouteProps {
  route: IRouteResponse,
  index: number
}

const Route:React.FC<IRouteProps> = (props:IRouteProps) => {
  function updateMap () {
    props.updateOrigin(props.route.origin)
    props.updateStops(props.route.stops)
  }

  let stopsText = ''
  const { stops } = props.route
  stops.forEach(stop => (stopsText += `${stops.indexOf(stop) > 0 ? ' - ' : ''}${stop.name}`))

  return (
    <RouteContainer onClick={() => updateMap()}>
      <IconContext.Provider value={{ color: colors.primary }}>
      <RouteContent>
        <div>
          <HorizontalDiv>
           <MdTripOrigin style={{ marginRight: '6px' }}/> <RouteTitle> Origem: </RouteTitle>
          </HorizontalDiv>
          <RouteDescription> {props.route.origin.name} </RouteDescription>
        </div>
        <div>
          <HorizontalDiv>
            <FaRoute style={{ marginRight: '6px' }}/> <RouteTitle style={{ marginTop: '7px' }}> Rota: </RouteTitle>
          </HorizontalDiv>
          <RouteDescription> {stopsText} </RouteDescription>
        </div>
      </RouteContent>

      </IconContext.Provider>

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
        <HistoryContainer ammount={routes.length}>
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
