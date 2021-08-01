import React, { Component } from 'react'
import { Container } from '@material-ui/core'



class Dashboard extends Component {
  render() {
    return (
      <Container className="content">
        <h1 className="content__title">Now you are logged in to Dashboard</h1>
      </Container>
    )
  }
}


export default Dashboard
