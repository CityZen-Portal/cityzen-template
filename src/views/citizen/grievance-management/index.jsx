import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom' 

const Grievance_Management = () => {
  return (
        <Routes>
            <Route path='/' element= {<Home /> } />
            <Route path='complaint-form' element= {null} />
            <Route path='complaint-log' element= {null} />
        </Routes>
  )
}

export default Grievance_Management