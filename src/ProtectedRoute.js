import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from './api'

const ProtectedRoute = ({ component: Component, exact, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default ProtectedRoute
