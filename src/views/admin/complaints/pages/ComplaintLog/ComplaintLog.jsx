import React, { useState } from 'react';
import ComplaintTable from '../../components/ComplaintTable.jsx';
import './ComplaintLog.css'

const ComplaintLog = ({changePage}) => {
  const [complaints] = useState([
    {
      id: '0001',
      subject: 'Water Leakage',
      department: 'Water Resource',
      location: 'Anna Nagar',
      dateLogged: '19/04/2025',
      status: 'pending'
    },
    {
      id: '0002',
      subject: 'Street Light Issue',
      department: 'Electricity',
      location: 'T.Nagar',
      dateLogged: '20/04/2025',
      status: 'in-progress'
    },
    {
      id: '0003',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'resolved'
    },
    {
      id: '0004',
      subject: 'Water Leakage',
      department: 'Water Resource',
      location: 'Anna Nagar',
      dateLogged: '19/04/2025',
      status: 'on-hold'
    },
    {
      id: '0005',
      subject: 'Street Light Issue',
      department: 'Electricity',
      location: 'T.Nagar',
      dateLogged: '20/04/2025',
      status: 'in-progress'
    },
    {
      id: '0006',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'closed'
    },
    {
      id: '0007',
      subject: 'Water Leakage',
      department: 'Water Resource',
      location: 'Anna Nagar',
      dateLogged: '19/04/2025',
      status: 'pending'
    },
    {
      id: '0008',
      subject: 'Street Light Issue',
      department: 'Electricity',
      location: 'T.Nagar',
      dateLogged: '20/04/2025',
      status: 'in-progress'
    },
    {
      id: '0009',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'closed'
    },
    {
      id: '0010',
      subject: 'Water Leakage',
      department: 'Water Resource',
      location: 'Anna Nagar',
      dateLogged: '19/04/2025',
      status: 'under-review'
    },
    {
      id: '00011',
      subject: 'Street Light Issue',
      department: 'Electricity',
      location: 'T.Nagar',
      dateLogged: '20/04/2025',
      status: 'in-progress'
    },
    {
      id: '00012',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'assigned'
    },
    {
      id: '00013',
      subject: 'Water Leakage',
      department: 'Water Resource',
      location: 'Anna Nagar',
      dateLogged: '19/04/2025',
      status: 'pending'
    },
    {
      id: '00014',
      subject: 'Street Light Issue',
      department: 'Electricity',
      location: 'T.Nagar',
      dateLogged: '20/04/2025',
      status: 'in-hold'
    },
    {
      id: '00015',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'rejected'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
      {/* <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Complaint Log</h1>
        <p className="text-gray-600 dark:text-gray-300">View your submitted complaints and their status</p>
      </div> */}

      <ComplaintTable complaints={complaints} changePage={changePage} />
    </div>
  );
};

export default ComplaintLog;
