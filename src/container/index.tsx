import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import * as routes from '../routes'
import Home from '../pages/Home'
import Header from '../components/Navbar'

const Layout = () => {
  let location = useLocation()

  return (
    <>
      {location.pathname !== `${routes.HOME}`
        && <Header />
      }
      <Container maxWidth="md">
        <Route
          exact
          path={routes.HOME}
          component={() => <Home />}
        />
      </Container>
    </>
  )

}

export default Layout