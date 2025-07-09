import React from 'react'
import HelpDeskHome from './pages/HelpDeskHome'
import ComplaintForm from './pages/ComplaintForm'
import ComplaintLog from './pages/ComplaintLog'
import { useState } from 'react'
import ComplaintDetails from './pages/ComplaintDetails'
import Feedback from './pages/Feedback'

const HelpDesk = () => {
  const [page, setPage] = useState("Home")

  const changePage = (currPage) => {
    setPage(currPage);
  }

  return (
  <>
    {page === "Home" ?
      <HelpDeskHome changePage={changePage} />
      : page === "Complaint Form" ? <ComplaintForm changePage={changePage} />
        : page === "Complaint Log" ? <ComplaintLog changePage={changePage} />
          : page === "Complaint Details" ? <ComplaintDetails changePage={changePage} />
            : <Feedback changePage={changePage} />}
  </>
)
}

export default HelpDesk