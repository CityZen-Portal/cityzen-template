import React, { useState } from 'react';
import { FaEye, FaEdit } from 'react-icons/fa';

const StaffRow = ({ complaint, setComplaints }) => {
  const { id, subject, department, dateLogged, location, status, notes, resolution } = complaint;
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-200 text-yellow-900 dark:bg-yellow-300 dark:text-yellow-900';
      case 'in progress': return 'bg-blue-200 text-blue-900 dark:bg-blue-300 dark:text-blue-900';
      case 'completed': return 'bg-green-200 text-green-900 dark:bg-green-300 dark:text-green-900';
      default: return 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white';
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);
    setComplaints(prev =>
      prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
    );
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Options based on the document
  const statusOptions = [
    'pending',
    'in progress',
    'completed',
    'ongoing',
    'modify',
    'change',
    'revise',
    'update',
    'adjust',
    'amend',
    'edit',
    'improve',
    'refine',
    'enhance',
    'correct',
    'fix',
    'alter',
  ];

  return (
    <tr className="border-t dark:border-gray-700">
      <td className="p-3 border">{id}</td>
      <td className="p-3 border">{subject}</td>
      <td className="p-3 border">{department}</td>
      <td className="p-3 border">{dateLogged}</td>
      <td className="p-3 border">{location}</td>
      <td className="p-3 border relative">
        <div className="flex items-center space-x-2 h-8"> {/* Fixed height for alignment */}
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(currentStatus)} inline-flex items-center`}>
            {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
          </span>
          <button
            onClick={handleEditClick}
            className="px-1 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs inline-flex items-center"
          >
            <FaEdit className="mr-0.5 text-sm" /> Edit
          </button>
        </div>
        {isEditing && (
          <div className="mt-1 absolute w-full z-10 bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-lg">
            <select
              value={currentStatus}
              onChange={handleStatusChange}
              onBlur={() => setIsEditing(false)}
              className="w-full px-2 py-1 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}
      </td>
      <td className="p-3 border">
        <button className="text-blue-600 hover:text-blue-800 flex items-center">
          <FaEye className="mr-1" /> View
        </button>
      </td>
      <td className="p-3 border">{resolution || 'N/A'}</td>
    </tr>
  );
};

export default StaffRow;