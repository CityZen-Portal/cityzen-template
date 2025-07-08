import React from 'react'
import Help_Desk_Home from './pages/Help_Desk_Home'
import { Routes, Route } from 'react-router-dom' 
// import ComplaintLog from './pages/Complaint_Log'
// import ComplaintDetails from './pages/Complaint_Log_Details'

const Grievance_Management = () => {
  return (
        <Routes>
            <Route path='/' element= {<Help_Desk_Home/> } />
            <Route path='complaint-form' element= {null} />
            <Route path='complaint-log' element= {null} />
        </Routes>
  )
}

export default Grievance_Management