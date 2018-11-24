import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { Header } from '../components/Header'

export const BasePrivateRoute = (
  { component: Component, isAuthenticated, ...rest }
) => {
  const component = (props) =>
    !isAuthenticated
      ? <Redirect to="/"/>
      : (
        <>
          <Header/>
          <Component {...props} />
        </>
      )
  return <Route {...rest} component={component} />
}

BasePrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export const PrivateRoute = connect(mapStateToProps)(BasePrivateRoute)
