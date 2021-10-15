import React from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import { Page, PageInfo } from './styles'
import Map from './Components/Map'

const Dashboard:React.FC = () => {
  return (
    <Page>
      <Header/>
      <PageInfo>
        <Editor/>
        <Map/>
      </PageInfo>
    </Page>
  )
}

export default Dashboard
