import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const StaffRow = ({ complaint, setComplaints }) => {
  const { id, citizen, subject, department, dateLogged, location, status, notes, resolution } = complaint;
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-200 dark:text-yellow-900';
      case 'under-review': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-200 dark:text-blue-900';
      case 'assigned': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-200 dark:text-purple-900';
      case 'in-progress': return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-200 dark:text-indigo-900';
      case 'on-hold': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-200 dark:text-orange-900';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-200 dark:text-green-900';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-200 dark:text-gray-900';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-200 dark:text-red-900';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-200 dark:text-gray-900';
    }
  };

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    setComplaints(prev =>
      prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
    );
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const formatStatus = (status) => {
    const statusMap = {
      'pending': 'Pending',
      'under-review': 'Under Review',
      'assigned': 'Assigned',
      'in-progress': 'In Progress',
      'on-hold': 'On Hold',
      'resolved': 'Resolved',
      'closed': 'Closed',
      'rejected': 'Rejected'
    };
    return statusMap[status] || status.charAt(0).toUpperCase() + status.slice(1);
  };

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'assigned', label: 'Assigned' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'on-hold', label: 'On Hold' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'closed', label: 'Closed' },
    { value: 'rejected', label: 'Rejected' }
  ];

  return (
    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {citizen}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {subject}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {department}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {dateLogged}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white relative">
        <div className="flex justify-between items-center w-full">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(currentStatus)} inline-flex items-center`}>
            {formatStatus(currentStatus)}
          </span>
          <button
            onClick={handleEditClick}
            className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs inline-flex items-center transition-colors duration-200"
          >
            <MdEdit className="text-sm" />
          </button>
        </div>

        
        {/* Slide-in Status Dropdown */}
        {isEditing && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-out animate-slide-down">
            <div className="p-2 space-y-1">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleStatusChange(option.value)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    option.value === currentStatus
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Backdrop to close dropdown */}
        {isEditing && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsEditing(false)}
          />
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center text-sm transition-colors duration-200">
          <FaEye className="mr-1 text-xs" /> View
        </button>
      </td>
    </tr>
  );
};

export default StaffRow;