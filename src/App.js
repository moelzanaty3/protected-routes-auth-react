import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container, Grid } from '@material-ui/core'
import { Footer, Header } from './components'
import {
  Dashboard,
  PageNotFound,
  Login,
  LeaderBoard,
  QuestionDetails,
} from './views'
import ProtectedRoute from './ProtectedRoute'

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <ProtectedRoute
                exact
                path="/"
                name="Dashboard"
                component={Dashboard}
              />
              <ProtectedRoute
                path="/leader-board"
                name="Leader Board"
                component={LeaderBoard}
              />
              <ProtectedRoute
                path="/question-details"
                name="Question Details"
                component={QuestionDetails}
              />
              <Route path="/404" component={PageNotFound} />
              <Redirect to="/404" />
            </Switch>
          </Grid>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default App
