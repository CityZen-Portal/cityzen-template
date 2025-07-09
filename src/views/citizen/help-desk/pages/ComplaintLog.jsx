import React, { useState } from 'react';

const ComplaintLog = () => {
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

  const handleFeedbackClick = (id) => {
    // Here you would typically open a modal or navigate to a feedback form
    alert(`Opening feedback form for complaint ${id}`);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inprogress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pending';
      case 'inprogress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Complaint Log</h1>
        <p className="text-gray-600">View your submitted complaints and their status</p>
      </div>

      {/* Complaint Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-r">
                  Complaint ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-r">
                  Subject
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-r">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-r">
                  Date Logged
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-r">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {complaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 border-r">
                    {complaint.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-r">
                    {complaint.subject}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-r">
                    {complaint.department}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-r">
                    {complaint.dateLogged}
                  </td>
                  <td className="px-6 py-4 border-r">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
                      {getStatusText(complaint.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleFeedbackClick(complaint.id)}
                      disabled={complaint.status !== 'completed'}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        complaint.status === 'completed'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Give Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintLog;