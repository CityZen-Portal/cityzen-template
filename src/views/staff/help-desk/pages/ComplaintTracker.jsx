import React, { useState, useEffect } from 'react';
import StaffComplaintTable from '../components/StaffComplaintTable';
import { MdTrackChanges } from 'react-icons/md';

const StaffComplaintTracker = () => {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    // Mock data with current date: July 09, 2025
    const mockData = [
      {
        id: 'T001',
        subject: 'Road Repair',
        department: 'Public Works',
        status: 'pending',
        dateLogged: '2025-07-08',
        location: 'Anna Nagar',
        notes: 'Reported pothole.',
        resolution: '',
      },
      {
        id: 'T002',
        subject: 'Waste Collection',
        department: 'Sanitation',
        status: 'in progress',
        dateLogged: '2025-07-09',
        location: 'T. Nagar',
        notes: 'Scheduled at 11:00 AM IST.',
        resolution: '50% complete.',
      },
      {
        id: 'T003',
        subject: 'Street Light Repair',
        department: 'Maintenance',
        status: 'completed',
        dateLogged: '2025-07-07',
        location: 'Adyar',
        notes: 'Fixed on 2025-07-08.',
        resolution: 'Illumination restored.',
      },
      {
        id: 'T004',
        subject: 'Tree Trimming',
        department: 'Maintenance',
        status: 'pending',
        dateLogged: '2025-07-06',
        location: 'Mylapore',
        notes: 'Scheduled next week.',
        resolution: '',
      },
    ];
    setComplaints(mockData);
  }, []);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Metrics for slide (1, 2, 3, 4)
  const metrics = [
    { label: 'Pending', value: complaints.filter(c => c.status === 'pending').length },
    { label: 'In Progress', value: complaints.filter(c => c.status === 'in progress').length },
    { label: 'Completed', value: complaints.filter(c => c.status === 'completed').length },
    { label: 'Total', value: complaints.length },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="mb-6 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <MdTrackChanges className="text-4xl text-blue-600 mr-3" />
            Staff Complaint Tracker
          </h1>
          <select
            value={filterStatus}
            onChange={handleFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex space-x-6 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm">
              <p className="text-gray-700 dark:text-gray-300">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
      <StaffComplaintTable complaints={complaints} setComplaints={setComplaints} filterStatus={filterStatus} />
    </div>
  );
};

export default StaffComplaintTracker;