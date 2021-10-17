import React from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const isAuthenticated = !!localStorage.getItem('token')

  return isAuthenticated ? <Route {...rest}/> : <Redirect to={{ pathname: '/auth' }} />
}

const Routes:React.FC = () => {
  return (
    <Switch>
        <Route exact path = '/auth' component={Auth}/>
        <PrivateRoute exact path = '/dashboard' component={Dashboard} />
        <PrivateRoute exact path = '/' component={Dashboard} />
    </Switch>
  )
}

export default Routes
