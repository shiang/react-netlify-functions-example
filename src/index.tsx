import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import '@reach/dialog/styles.css'
import 'react-netlify-identity-widget/styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
