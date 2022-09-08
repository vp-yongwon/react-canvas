import * as React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Main from 'pages/main'

function Routers() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default Routers
