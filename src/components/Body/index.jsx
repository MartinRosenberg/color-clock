import React from 'react'
import Helmet from 'react-helmet'

export const Body = ({ color }) => (
  <Helmet>
    <body style={`background: ${color}`}/>
  </Helmet>
)
