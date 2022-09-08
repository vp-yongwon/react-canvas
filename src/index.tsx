import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import * as React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'containers/app'

import 'styles/globals.scss'

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLButtonElement
)

root.render(
  <App />
)
