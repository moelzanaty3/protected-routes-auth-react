import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Button,
  Icon,
} from '@material-ui/core'
import LOGO from '../assets/logo.png'
import { isAuthenticated, logout } from '../api'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  logo: {
    borderRadius: '10px',
  },
  meta: {
    display: 'flex',
  },
}))

const NAV_ITEMS = [
  { id: 1, label: 'Dashboard', path: '/' },
  { id: 2, label: 'Leader Board', path: '/leader-board' },
  { id: 3, label: 'Question Details', path: '/question-details' },
]

function Header({ history }) {
  const classes = useStyles()
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Box className={`${classes.toolbarTitle}`}>
          <Link to={'/'}>
            <img
              src={LOGO}
              alt="would you rather logo"
              width="40"
              className={`${classes.logo}`}
            />
          </Link>
        </Box>
        <nav>
          {NAV_ITEMS &&
            NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.id}
                variant="button"
                color="textPrimary"
                to={navItem.path}
                className={classes.link}
              >
                {navItem.label}
              </Link>
            ))}
        </nav>
        {/* TODO: handle this logout button for only authenticated users */}
        {isAuthenticated() && (
          <Box className={classes.meta}>
            <Button
              onClick={() => {
                logout()
                history.push('/login')
              }}
              color="secondary"
              className={classes.link}
            >
              <Icon>logout</Icon>
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header)
