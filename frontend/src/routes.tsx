import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'

const Routes:React.FC = () => {
  return (
    <Switch>
        <Route exact path = '/login' component={Login}/>
    </Switch>
  )
}

export default Routes
