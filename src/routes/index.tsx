import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

const Home = lazy(() => import('@app/pages/Home'))

export default () => (
  <Router>
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
  </Router>
)