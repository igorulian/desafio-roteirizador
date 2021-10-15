import React from 'react'
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const isAuthenticated = !!localStorage.getItem('token')

  return isAuthenticated ? <Route {...rest}/> : <Redirect to={{ pathname: '/login' }} />
}

const Routes:React.FC = () => {
  return (
    <Switch>
        <Route exact path = '/login' component={Auth}/>
        <Route exact path = '/dashboard' component={Dashboard} />
        <PrivateRoute exact path = '/dashboardPrivate' component={Dashboard} />
    </Switch>
  )
}

export default Routes
