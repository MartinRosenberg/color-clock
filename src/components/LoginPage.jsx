import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { startLogIn } from '../actions/auth'

export const BaseLoginPage = ({ startLogIn }) =>
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate React App</h1>
      <p>Tagline for app</p>
      <button className="button" onClick={startLogIn}>
        Log in with Google
      </button>
    </div>
  </div>

BaseLoginPage.propTypes = {
  startLogIn: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
})

export const LoginPage = connect(undefined, mapDispatchToProps)(BaseLoginPage)
