import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  EscapeRooms,
  Home,
  Rides,
  RideInfo,
  RoomInfo,
  Parks,
  ParkInfo,
} from './pages'
import { Footer, Header } from './components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <main id='main-content'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/escape-rooms' element={<EscapeRooms />} />
          <Route path='/escape-rooms/room-info' element={<RoomInfo />} />
          <Route path='/rides' element={<Rides />} />
          <Route path='/rides/ride-info' element={<RideInfo />} />
          <Route path='/theme-parks' element={<Parks />} />
          <Route path='/theme-parks/park-info' element={<ParkInfo />} />
        </Routes>
      </Router>
    </main>
    <Footer />
  </React.StrictMode>
)
