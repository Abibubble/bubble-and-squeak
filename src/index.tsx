import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Accessibility,
  EscapeRooms,
  Home,
  Rides,
  RideInfo,
  RoomInfo,
  Parks,
  ParkInfo,
} from './pages'
import { Footer, Header, SkipLink } from './components'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <SkipLink />
    <Header />
    <main id='main-content'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accessibility' element={<Accessibility />} />
          <Route path='/escape-rooms' element={<EscapeRooms />} />
          <Route
            path='/escape-rooms/room-info/:roomName'
            element={<RoomInfo />}
          />
          <Route path='/rides' element={<Rides />} />
          <Route path='/rides/ride-info/:rideName' element={<RideInfo />} />
          <Route path='/theme-parks' element={<Parks />} />
          <Route
            path='/theme-parks/park-info/:parkName'
            element={<ParkInfo />}
          />
        </Routes>
      </Router>
    </main>
    <Footer />
  </React.StrictMode>
)
