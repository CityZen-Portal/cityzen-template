import React from 'react'
import { useState } from 'react'
import ComplaintLog from './pages/ComplaintLog/ComplaintLog'
import AssignStaff from './pages/AssignStaff'

const ComplaintManagement = () => {
  const [page, setPage] = useState("Complaint Log")

  const changePage = (currPage) => {
    setPage(currPage);
  }

  return (
    <div>
        {page === 'Complaint Log' ? <ComplaintLog changePage={changePage} />
          : page === 'Assign Staff' ? <AssignStaff changePage={changePage} />
            : null}
    </div>
  )
}

export default ComplaintManagement