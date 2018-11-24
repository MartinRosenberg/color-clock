import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const BasePublicRoute = (
  { component: Component, isAuthenticated, ...rest }
) => {
  const component = (props) =>
    !isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/dashboard"/>
  return <Route {...rest} component={component} />
}

BasePublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export const PublicRoute = connect(mapStateToProps)(BasePublicRoute)
