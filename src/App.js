import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accommodation from './pages/accommodation'
import Congratulations from './pages/congratulations'
import DayPlan from './pages/day-plan'
import DressCode from './pages/dress-code'
import Gift from './pages/gift'
import Home from './pages/home'
import Info from './pages/info'
import Maths from './pages/maths'
import Password from './pages/password'
import Pigpen from './pages/pigpen'
import Poem from './pages/poem'
import Riddle from './pages/riddle'
import Rsvp from './pages/rsvp'
import Science from './pages/science'
import Transport from './pages/transport'
import Welcome from './pages/welcome'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/accommodation' element={<Accommodation />} />
        <Route path='/congratulations' element={<Congratulations />} />
        <Route path='/day-plan' element={<DayPlan />} />
        <Route path='/dress-code' element={<DressCode />} />
        <Route path='/gift' element={<Gift />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/information' element={<Info />} />
        <Route path='/maths' element={<Maths />} />
        <Route path='/password' element={<Password />} />
        <Route path='/pigpen' element={<Pigpen />} />
        <Route path='/poem' element={<Poem />} />
        <Route path='/riddle' element={<Riddle />} />
        <Route path='/rsvp' element={<Rsvp />} />
        <Route path='/science' element={<Science />} />
        <Route path='/transport' element={<Transport />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </Router>
  )
}
