import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import { Page, PageInfo } from './styles'
import Map from './Components/Map'
import { ICoords } from './Components/Editor/newRoute'

const Dashboard:React.FC = () => {
  const [origin, setOrigin] = useState<ICoords>({ lat: 0, lng: 0 })
  const [stops, setStops] = useState<ICoords[]>([{ lat: 0, lng: 0 }])
  const [reload, setReload] = useState(1)

  useEffect(() => {
    console.log('MAP INFO')
    console.log(origin, stops)
  }, [origin, stops, reload])

  function updateStops (data:ICoords[]) {
    setStops(data)
    setReload(reload + 1) // "forçar" o update
  }

  return (
    <Page>
      <Header/>
      <PageInfo>
        <Editor
          updateOrigin={(data:ICoords) => setOrigin(data) }
          updateStops={(data:ICoords[]) => updateStops(data) }
          />
        <Map origin={origin} stops={stops}/>
      </PageInfo>
    </Page>
  )
}

export default Dashboard
