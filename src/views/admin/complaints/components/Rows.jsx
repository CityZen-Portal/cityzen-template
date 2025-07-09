import React from 'react';

const Rows = ({ complaint, getStatusColor, getStatusText }) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
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
      </td>
      <td className="px-6 py-4 flex">
        <button>Edit Status</button>
        <button>Take Resolution</button>
      </td>
    </tr>
  );
};

export default Rows;
