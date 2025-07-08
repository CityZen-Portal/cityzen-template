
import ComplaintForm from './pages/ComplaintForm'
import Help_Desk_Home from './pages/Help_Desk_Home'
import { Routes, Route } from 'react-router-dom' 

const Grievance_Management = () => {
  return (
        <Routes>
            <Route path='/' element= {<ComplaintForm></ComplaintForm>} />
            <Route path='complaint-form' element= {null} />
            <Route path='complaint-log' element= {null} />
        </Routes>
  )
}

export default Grievance_Management