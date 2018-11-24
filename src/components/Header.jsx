import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startLogOut } from '../actions/auth'

export const BaseHeader = ({ startLogOut }) =>
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Boilerplate React App</h1>
        </Link>
        <button className="button button--link" onClick={startLogOut}>
          Log Out
        </button>
      </div>
    </div>
  </header>

BaseHeader.propTypes = {
  startLogOut: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})

export const Header = connect(undefined, mapDispatchToProps)(BaseHeader)
