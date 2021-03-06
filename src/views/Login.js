import React, { Component } from 'react'
import {
  Button,
  Container,
  Typography,
  withStyles,
} from '@material-ui/core'
import { withRouter, Redirect } from 'react-router-dom'
import LOGO from '../assets/logo.png'
import { login } from '../api'

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    borderRadius: '10px',
    marginBottom: '20px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
})

class Login extends Component {
  state = {
    redirectToReferrer: false,
  }

  handleLoginSubmit = () => {
    //TODO: add login logic
    login()
    this.setState(() => ({
      redirectToReferrer: true,
    }))
  }

  render() {
    const { classes } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <img
            src={LOGO}
            alt="would you rather logo"
            width="40"
            className={`${classes.logo}`}
          />
          <Typography component="h1" variant="h5">
            Sign in to ....
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(event) => {
              event.preventDefault()
              this.handleLoginSubmit()
            }}
          >
            Sign In
          </Button>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Login))
