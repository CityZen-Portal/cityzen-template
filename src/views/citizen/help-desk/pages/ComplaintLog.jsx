import React, { useState } from 'react';
import ComplaintTable from '../components/ComplaintTable.jsx';

const ComplaintLog = ({changePage}) => {
  const [complaints] = useState([
    {
      id: '0001',
      subject: 'Water Leakage',
      department: 'Water Resource',
      dateLogged: '19/04/2025',
      status: 'pending',
      feedback: ''
    },
    {
      id: '0002',
      subject: 'Street Light Issue',
      department: 'Electricity',
      dateLogged: '20/04/2025',
      status: 'inprogress',
      feedback: ''
    },
    {
      id: '0003',
      subject: 'Garbage Collection',
      department: 'Sanitation',
      dateLogged: '21/04/2025',
      status: 'completed',
      feedback: 'Issue resolved successfully'
    }
  ]);

  return (
    <div className="relative flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => changePage("Home")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md"
        >
        Back
        </button>
      </div>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Complaint Log</h1>
          <p className="text-gray-600 dark:text-gray-300">View your submitted complaints and their status</p>
        </div>

        <ComplaintTable complaints={complaints} changePage={changePage} />
      </div>
    </div>
  );
};

export default ComplaintLog;
