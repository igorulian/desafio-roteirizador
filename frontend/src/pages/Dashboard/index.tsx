import React from 'react'
import Header from './components/header'
import Editor from './components/editor'
import { Page, PageInfo } from './styles'

const Dashboard:React.FC = () => {
  return (
    <Page>
      <Header/>

      <PageInfo>
        <Editor/>
      </PageInfo>
    </Page>
  )
}

export default Dashboard
