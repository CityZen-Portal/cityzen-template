import React, { useState } from 'react';
import ComplaintTable from '../components/ComplaintTable.jsx';

const ComplaintLog = () => {
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
      status: 'inprogress'
    },
    {
      id: '0003',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      location: 'Anna Nagar',
      dateLogged: '21/04/2025',
      status: 'completed'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
      {/* <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Complaint Log</h1>
        <p className="text-gray-600 dark:text-gray-300">View your submitted complaints and their status</p>
      </div> */}

      <ComplaintTable complaints={complaints} />
    </div>
  );
};

export default ComplaintLog;
