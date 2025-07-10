import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import Button from 'views/admin/complaints/components/Button';

const Rows = ({ complaint, getStatusColor, getStatusText, link }) => {
  const navigate = useNavigate()
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
        <Button Icon={MdVisibility} text={'View'} key={`view-${complaint.id}`} link={`/citizen/help-desk/complaint/view/${complaint.id}`} />
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => navigate(link)}
          disabled={complaint.status !== 'completed'}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            complaint.status === 'completed'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          Give Feedback
        </button>
      </td>
    </tr>
  );
};

export default Rows;
