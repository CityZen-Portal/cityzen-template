import React from 'react'
import HelpDeskHome from './pages/HelpDeskHome'
import ComplaintForm from './pages/ComplaintForm'
import ComplaintLog from './pages/ComplaintLog'
import { useState } from 'react'

const HelpDesk = () => {
  const [page, setPage] = useState("Home")

  const changePage = (currPage) => {
    setPage(currPage);
  }

  return (
  <>
    {page === "Home" ?
      <HelpDeskHome changePage={changePage} />
      : page === "Complaint Form" ? <ComplaintForm />
        : <ComplaintLog />}
  </>
)
}

export default HelpDesk