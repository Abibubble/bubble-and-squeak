import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EscapeRooms, Home, Rides, Parks } from './pages'
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
          <Route path='/rides' element={<Rides />} />
          <Route path='/theme-parks' element={<Parks />} />
        </Routes>
      </Router>
    </main>
    <Footer />
  </React.StrictMode>
)
