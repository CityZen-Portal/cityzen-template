import React, { useState, useEffect } from 'react';
import StaffComplaintTable from '../components/StaffComplaintTable';
import { MdTrackChanges } from 'react-icons/md';

const ComplaintLog = () => {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    // Enhanced mock data with more entries for pagination
    const mockData = [
      {
        id: 'T001',
        citizen: 'John Doe',
        issue: 'Road Repair',
        department: 'Public Works',
        status: 'pending',
        dateLogged: '2025-07-08',
        location: 'Anna Nagar',
        notes: 'Reported pothole.',
        resolution: '',
      },
      {
        id: 'T002',
        citizen: 'Jane Smith',
        issue: 'Waste Collection',
        department: 'Sanitation',
        status: 'in-progress',
        dateLogged: '2025-07-09',
        location: 'T. Nagar',
        notes: 'Scheduled at 11:00 AM IST.',
        resolution: '50% complete.',
      },
      {
        id: 'T003',
        citizen: 'Robert Johnson',
        issue: 'Street Light Repair',
        department: 'Maintenance',
        status: 'resolved',
        dateLogged: '2025-07-07',
        location: 'Adyar',
        notes: 'Fixed on 2025-07-08.',
        resolution: 'Illumination restored.',
      },
      {
        id: 'T004',
        citizen: 'Emily Davis',
        issue: 'Tree Trimming',
        department: 'Maintenance',
        status: 'pending',
        dateLogged: '2025-07-06',
        location: 'Mylapore',
        notes: 'Scheduled next week.',
        resolution: '',
      },
      {
        id: 'T005',
        citizen: 'Michael Brown',
        issue: 'Water Supply',
        department: 'Water Works',
        status: 'assigned',
        dateLogged: '2025-07-05',
        location: 'Velachery',
        notes: 'Low water pressure reported.',
        resolution: '',
      },
      {
        id: 'T006',
        citizen: 'Sarah Wilson',
        issue: 'Drainage',
        department: 'Public Works',
        status: 'under-review',
        dateLogged: '2025-07-04',
        location: 'Guindy',
        notes: 'Blocked drainage system.',
        resolution: '',
      },
      {
        id: 'T007',
        citizen: 'David Taylor',
        issue: 'Park Maintenance',
        department: 'Parks',
        status: 'on-hold',
        dateLogged: '2025-07-03',
        location: 'Nungambakkam',
        notes: 'Playground equipment repair.',
        resolution: 'Waiting for spare parts.',
      },
      {
        id: 'T008',
        citizen: 'Lisa Anderson',
        issue: 'Traffic Signal',
        department: 'Traffic',
        status: 'closed',
        dateLogged: '2025-07-02',
        location: 'Besant Nagar',
        notes: 'Traffic light malfunction.',
        resolution: 'Repaired and tested.',
      },
      {
        id: 'T009',
        citizen: 'Tom Wilson',
        issue: 'Noise Complaint',
        department: 'Municipal',
        status: 'rejected',
        dateLogged: '2025-07-01',
        location: 'Mount Road',
        notes: 'Construction noise complaint.',
        resolution: 'Within permitted hours.',
      },
      {
        id: 'T010',
        citizen: 'Amy Johnson',
        issue: 'Building Permit',
        department: 'Planning',
        status: 'resolved',
        dateLogged: '2025-06-30',
        location: 'Kodambakkam',
        notes: 'Permit application review.',
        resolution: 'Permit approved.',
      },
      {
        id: 'T011',
        citizen: 'Mark Davis',
        issue: 'Street Cleaning',
        department: 'Sanitation',
        status: 'in-progress',
        dateLogged: '2025-06-29',
        location: 'Alwarpet',
        notes: 'Regular cleaning schedule.',
        resolution: 'Cleaning in progress.',
      },
      {
        id: 'T012',
        citizen: 'Rachel Green',
        issue: 'Water Leakage',
        department: 'Water Works',
        status: 'assigned',
        dateLogged: '2025-06-28',
        location: 'Royapettah',
        notes: 'Pipeline leakage reported.',
        resolution: '',
      },
      {
        id: 'T013',
        citizen: 'Jennifer Lee',
        issue: 'Pothole Repair',
        department: 'Public Works',
        status: 'under-review',
        dateLogged: '2025-06-27',
        location: 'Porur',
        notes: 'Multiple potholes on road.',
        resolution: '',
      },
      {
        id: 'T014',
        citizen: 'Alex Johnson',
        issue: 'Garbage Collection',
        department: 'Sanitation',
        status: 'pending',
        dateLogged: '2025-06-26',
        location: 'Tambaram',
        notes: 'Missed collection schedule.',
        resolution: '',
      },
      {
        id: 'T015',
        citizen: 'Maria Garcia',
        issue: 'Public Toilet',
        department: 'Municipal',
        status: 'on-hold',
        dateLogged: '2025-06-25',
        location: 'Chromepet',
        notes: 'Maintenance required.',
        resolution: 'Waiting for approval.',
      },
      {
        id: 'T016',
        citizen: 'Chris Brown',
        issue: 'Street Light',
        department: 'Maintenance',
        status: 'resolved',
        dateLogged: '2025-06-24',
        location: 'Central Station',
        notes: 'Street light not working.',
        resolution: 'Replaced and working.',
      },
    ];
    setComplaints(mockData);
  }, []);

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Updated metrics for new statuses
  const metrics = [
    { label: 'Pending', value: complaints.filter(c => c.status === 'pending').length, color: 'bg-yellow-100 text-yellow-800' },
    { label: 'In Progress', value: complaints.filter(c => c.status === 'in-progress').length, color: 'bg-blue-100 text-blue-800' },
    { label: 'Resolved', value: complaints.filter(c => c.status === 'resolved').length, color: 'bg-green-100 text-green-800' },
    { label: 'Total', value: complaints.length, color: 'bg-gray-100 text-gray-800' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <MdTrackChanges className="text-4xl text-blue-600 mr-3" />
            Staff Complaint Tracker
          </h1>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">Filter by Status:</label>
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="under-review">Under Review</option>
              <option value="assigned">Assigned</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${metric.color} flex items-center justify-center`}>
                  <span className="text-lg font-bold">{metric.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <StaffComplaintTable 
        complaints={complaints} 
        setComplaints={setComplaints} 
        filterStatus={filterStatus} 
      />
    </div>
  );
};

export default ComplaintLog;