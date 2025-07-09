// src/views/grievance-management/components/Rows.jsx
import React from 'react';

const Rows = ({ complaint, handleFeedbackClick, getStatusColor, getStatusText }) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.id}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.subject}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.department}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.dateLogged}</td>
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
              : 'bg-gray-300 text-gray-500 dark:bg-navy-600 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          Give Feedback
        </button>
      </td>
    </tr>
  );
};

export default Rows;
