import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core'

class PageNotFound extends Component {
  render() {
    return (
      <Container className="content">
        <h1 style={{ marginTop: '2rem' }}>⚠️PageNotFound</h1>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.history.push('/')
          }}
        >
          🏠 Back Home 🏠
        </Button>
      </Container>
    )
  }
}

export default PageNotFound
