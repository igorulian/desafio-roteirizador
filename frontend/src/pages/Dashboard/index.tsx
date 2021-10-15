import React from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
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
