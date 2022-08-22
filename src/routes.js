import React, { lazy } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import axios from 'axios'
import history from './history'

// Set default headers
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.client_id = process.env.REACT_APP_CLIENT_ID

const PrivateRoute = ({ component: Component, ...rest }) => {

  if (
    rest.path !== '/landing'
  ) {
    window.location = '/landing'
    return null
  }

  return (
    <Route
      {...rest}
      render={(props) => 
        (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )}
    />
  )
}

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={lazy(() => import('./containers/Login'))} />
      <Route exact path='/login' component={lazy(() => import('./containers/Login'))} />
      <Route path='/error' component={lazy(() => import('./containers/ErrorPage'))} />
      <Route path='*' component={lazy(() => import('./containers/ErrorPage'))} />
    </Switch>
  </Router>
)

export default Routes
