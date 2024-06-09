import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

function Routers() {
  return (
    <>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    </>
  )
}

export default Routers