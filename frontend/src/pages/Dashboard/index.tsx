import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import { Page, PageInfo } from './styles'
import Map from './Components/Map'
import { IMapInfo } from './Components/Editor/newRoute'

const Dashboard:React.FC = () => {
  const [mapInfo, setMapInfo] = useState<IMapInfo>({ origin: { lat: 0, lng: 0 }, stops: [{ lat: 0, lng: 0 }] })

  useEffect(() => {
    console.log('MAP INFO GERAL MUDOU: ')
    console.log(mapInfo)
  }, [mapInfo])

  return (
    <Page>
      <Header/>
      <PageInfo>
        <Editor updateMap={(data:IMapInfo) => setMapInfo(data) }/>
        <Map data={mapInfo}/>
      </PageInfo>
    </Page>
  )
}

export default Dashboard
