import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import CarouselEnsheaab from '../components/carousel/CarouselEnsheaab';

const Home = lazy(() =>delayForDemo(import('../pages/Home/Home')));
function Routers() {
  return (
    <>
        <Routes>
          <Route index element={<Suspense fallback={<CarouselEnsheaab checkeds={true}/> }><Home /></Suspense>} />
        </Routes>
    </>
  )
}

export default Routers

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}